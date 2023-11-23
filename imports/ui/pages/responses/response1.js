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
    addDynamicCSS(Questions)
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

//hacky solution???
function addDynamicCSS (questions) {
    let CSSObject = {
        scales: {
            limit: 10,
            css: function (elementId, index) {
                return `.escala label[for=escala${index}${elementId}]::before {
                        content: '${index}';
                        position: relative;
                        display: block;
                        border: 1px solid;
                        border-radius: 50px;
                        padding: 7px;
                        }
                        .escala label[for=escala${index}${elementId}]::after {
                        position: absolute;
                        top: 0px;
                        opacity: 0;
                        transition: 0.5s;
                        content: '${index}';
                        width: 40px;
                        border: 1px solid #44987b;
                        border-radius: 50px;
                        padding: 7px;
                        background-color: rgb(68 152 123 / 17%);
                        color: #44987b;
                        }`
            }
        }
    }
    if (questions.length) {
        let styleTag = document.createElement("style");
        questions.forEach(question => {
            console.log(question)
            if (question.type === 'scales') {
                for (let i = 1; i <= CSSObject.scales.limit; i++) {
                    let cssTemplateString = CSSObject.scales.css(question._id, i)

                    styleTag.innerHTML += cssTemplateString;
                }
            }
        //    else other types goes here
        })
        console.log(styleTag)
        document.head.insertAdjacentElement('beforeend', styleTag);
    }
}




