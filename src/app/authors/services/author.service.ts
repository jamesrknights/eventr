export class AuthorService {

    authors = ["author 1", "author 2", "author 3"];

    public get (property : String){

        var result;
        switch (property) {
            case "authors":
                result = this.authors;
                break;
            default:
                break;
        }
        return result;
    }

    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "authors":
                this.authors = value;
                changes = [{
                    property: property,
                    value: value
                }];
                break;
        }
        return changes;
    }
} 