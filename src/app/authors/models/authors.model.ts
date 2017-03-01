export class AuthorsModel {

    title = "Authors";
    name = "Authors page";
    authors = ["Author 1", "Author 2"];
    isFavourite = false;


     public get (property : String){

        var result;
        switch (property) {
            case "title":
                result = this.title;
                break;
            case "name":
                result = this.name;
                break;
            case "authors":
                result = this.authors; 
                break;
            case "isFavourite":
                result = this.isFavourite;
                break;
            default:
                break;
        }
        return result;
    }
    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "title":
                this.title = value;
                changes = [{
                    property: property,
                    value: value
                }];
                break;
            case "name":
                this.name = value;
                changes = [{
                    property: property,
                    value: value
                }];
                break;
            case "authors":
                this.authors = value;
                changes = [{
                    property: property,
                    value: value
                }];
                break;
            case "isFavourite":
                this.isFavourite = value;
                changes = [{
                    property: property,
                    value: value
                }];
                break;
        }

    }

}