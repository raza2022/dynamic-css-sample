import './response1.html';

//sample object question array
let Questions = [
    {
        "_id": "b27MhEFzL2Hs8t7k",
        "type": "scales",
        "options": {
            "question": "How much do you like Meteor 3 improvements ",
        },

    },
    {
        "_id": "yZzTa78HuEibGxKD",
        "type": "scales",
        "options": {
            "question": "Are you satisfied with Blaze current progress ",
        },
    }
];

Template.response1.onRendered(function () {

})

Template.response1.helpers({
    //get the current step of survey

    questions() {
        return Questions || [];
    },
    //added it because I need the index directly instead of hacky ways
    questionConfig(question, index) {
        question.index = index;
        return question
    },

});

Template.response1.events({
    'change #scale' (event) {
        let scales = $(event.target).closest(".escala");
        let value = scales.find("input[name^='escala']:checked").val();
        //
        // DB update goes here
    },
});



