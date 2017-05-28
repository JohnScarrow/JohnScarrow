'use strict';
var app = app || {};

(function (module){
var projects = [];
function Project (projectsObj) {
  this.title = projectsObj.title;
  this.link = projectsObj.link;
  this.description = projectsObj.description;
}

Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#project-template').text());
  return template(this);
};
projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});
projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
})
projects.forEach(function(project){
  $('#project').append(project.toHtml())
});


const storeData = function (){
  localStorage.setItem('projectData', JSON.stringify(projectData));
}

})(app);