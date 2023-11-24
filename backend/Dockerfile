FROM python:3.10
WORKDIR /app
COPY requirements.txt .

RUN pip install -r requirements.txt
COPY . /app
CMD [ "python", "main.py" ]

#docker run --name angularb --network mynetwork -p 4700:80 --rm -d frontend:angularv1
#docker run --name fastapib --network mynetwork -p 8000:8000 --rm -d fastapi-backend