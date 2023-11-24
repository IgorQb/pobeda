import { environment } from "../../environments/environment";
const api = environment.api;
export const URLs = {
    appeals: {
        getTheClassificationOfAppeals: api + 'appeals'
    }
}
