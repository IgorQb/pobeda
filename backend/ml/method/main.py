import nltk
import re
import pymorphy2
import pandas as pd
from nltk.corpus import stopwords
from nltk.stem import SnowballStemmer
from catboost import CatBoostClassifier


# model_group_path = 'backend/ml/groupTheme.014874'
# model_theme_path = 'backend/ml/theme.101913'

model_group_path = './ml/groupTheme.014874'
model_theme_path = './ml/theme.101913'

nltk.download('stopwords')
stopwords_ru = stopwords.words("russian")
stopwords_ru.extend(['на','то','это','так','по','е','зато','есть','ещё','наш','вся','где','г', 'почему','вы','такие','я','её','сих-пор','ук','это','кто','сейчас','пока','подскажите'])
model_gr = CatBoostClassifier()
model_gr.load_model(model_group_path)
model_tm = CatBoostClassifier()
model_tm.load_model(model_theme_path)

def predict_group(df: pd.DataFrame):
  def remove_html(text):
    html=re.compile(r'<.*?>')
    return html.sub(r'',text)

  def remove_num(text):
    remove= re.sub(r'\d+', '', text)
    return remove

  def punct_remove(text):
      punct = re.sub(r"[^\w\s\d]","", text)
      return punct
  def remove_stopwords(text):
      """custom function to remove the stopwords"""
      return " ".join([word for word in str(text).split() if word not in stopwords_ru])

  def remove_mention(x):
      text=re.sub(r'@\w+','',x)
      return text

  def remove_hash(x):
      text=re.sub(r'#\w+','',x)
      return text

  def remove_space(text):
      space_remove = re.sub(r"\s+"," ",text).strip()
      return space_remove

  def remove_urls(text):
      url_remove = re.compile(r'https?://\S+|www\.\S+')
      return url_remove.sub(r'', text)

  df['Текст инцидента'] = df['Текст инцидента'].apply(remove_urls)
  df['Текст инцидента'] = df['Текст инцидента'].apply(remove_html)
  df['Текст инцидента'] = df['Текст инцидента'].apply(punct_remove)
  df['Текст инцидента'] = df['Текст инцидента'].apply(remove_stopwords)
  df['Текст инцидента'] = df['Текст инцидента'].apply(remove_mention)
  df['Текст инцидента'] = df['Текст инцидента'].apply(remove_hash)
  df['Текст инцидента'] = df['Текст инцидента'].apply(remove_space)
  df.dropna(axis=0)

  df["Текст инцидента"] = df["Текст инцидента"].str.lower()
  df = df[df["Текст инцидента"].str.len() > 2]
  df = df.dropna(axis=0)

  morph = pymorphy2.MorphAnalyzer()

  def lemmatize(doc):
      tokens = []
      for token in doc.split():
          if token and token not in stopwords.words("russian"):
              token = token.strip()
              parsed_token = morph.parse(token)[0]
              normal_form = parsed_token.normal_form
              tokens.append(normal_form)
      if len(tokens) > 2:
          return " ".join(tokens)
      return None


  df["Текст инцидента"] = df["Текст инцидента"].apply(lemmatize)
  df = df.dropna(axis=0)



  return {'group': model_gr.predict(df),
          'theme': model_tm.predict(df)}