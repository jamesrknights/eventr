export class CourseService {

    model = {"courses" : [{id : 1,
                title : "Course 1", 
                description : "This is Course 1", 
                isFavourite : true}, 
                {id : 2,
                title : "Course 2", 
                description : "This is Course 2", 
                isFavourite : true},
                {id : 3,
                title : "Course 3", 
                description : "This is Course 3", 
                isFavourite : false}]};

    public get (property : String){

        var result;
        switch (property) {
            case "model":
                result = this.model;
                break;
            default:
                break;
        }
        return result;
    }

    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "model":
                this.model = value;
                changes = [{
                    property: property,
                    value: value
                }];
                break;
        }
        return changes;
    }

    public update (changes) {

        console.log("heard update", changes);

    }


}