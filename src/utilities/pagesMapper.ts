import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';

export const pagesMapper = (className) => {
    let classFactory: Object = {
        "HomePage":     HomePage,
        "ContactPage":  ContactPage
    }
    if (className in classFactory) {
        return classFactory[className];
    } else {
        console.log("No page class match for " + className);
    }
}