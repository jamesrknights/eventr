export class CoursesModel {

    title = "Courses";
    name = "Courses page";
    courses = ["Course 1", "Course 2"];
    isFavourite = true;


     public get (property : String){

        var result;
        switch (property) {
            case "title":
                result = this.title;
                break;
            case "name":
                result = this.name;
                break;
            case "courses":
                result = this.courses; 
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
            case "courses":
                this.courses = value;
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