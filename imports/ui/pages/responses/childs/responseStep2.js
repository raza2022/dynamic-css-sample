import './responseStep2.html'

Template.responseStep2.helpers({
    templateName() {
        return Template.parentData(0)?.type + "Response";
    },
    data() {
        return this;
    }
})