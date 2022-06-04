// 1. extends keyword followed by the class
class CustomError extends Error{
    constructor(message){
    // invocation to the superclass constructor,
    // as a benefit your class will have the property message
    // and will be interpreted as an error object.
    super(message);
    // additional property that I want
    this.name = "MyError"
    }
    }
    
function throwGenericError(a, b) {
    if (isNaN(a) || isNaN(b)) {
    throw new Error("Force generic error");
    }
     return a > b;
    }
     try {
     throwGenericError("asd", "2");
    } catch (err) {
    console.log(err.message);
    } 
    finally{
    }
    
    function throwCustomError(a, b) {
        if (isNaN(a) || isNaN(b)) {
        throw new Error("Force custom error");
        }
         return a > b;
        }
         try {
        throwCustomError("asd", "2");
        } catch (err) {
        console.log(err.message);
        } 
        finally{
        }
