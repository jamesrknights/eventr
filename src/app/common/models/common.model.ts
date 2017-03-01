export class CommonModel {

    private params;

    function 
    public get (property : String){

        var result;
        switch (property) {
            case "params":
                result = this.params; 
        }
        return result;
    }
    
     
    public set (property : String, value, sourceId : String) {

        var changes;
        switch (property) {
            case "params":
                this.params = value;
            changes = [{
                property: property,
                value: value
            }]
        }

    }

}