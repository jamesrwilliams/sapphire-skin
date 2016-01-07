/**
 *	Feedback Page - Javascript Fragment
 *
 * 	Adds the correct alert-box class to the status <span> element
 *	Can style the element in relation to its status within the
 *	system.
 * 
 */

var element = document.getElementsByClassName("msl-idea-status")[0];
var feedback_status = element.innerHTML;

switch (feedback_status) {

	case "Current":
        element.className += " alertbox";
			break;
        
    case "Passed":
        
      	element.className += " alertbox";
        break;
        
   case "Rejected":
       
        element.className += " alertbox";
        break;
        
   case "Locked":
        
        element.className += " alertbox";
        break;

}