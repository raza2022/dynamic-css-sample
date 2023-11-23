import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


import '../../ui/layouts/body/body_clean_survey.js';
import '../../ui/pages/responses/response.js'
import '../../ui/pages/responses/response1.js'
import '../../ui/pages/responses/childs/responseStep2'

FlowRouter.route('/', {
  name: 'response',
  action() {
    this.render('clean_layout', 'response');
  }
});

FlowRouter.route('/v1', {
  name: 'response1',
  action() {
    this.render('clean_layout', 'response1');
  }
});


