define(["jquery",
    "underscore",
    "backbone",
    "text!templates/project/projectHome.html",
    "views/project/ProjectSectionView"], 
    function($, _, Backbone, ProjectHomeTemplate, ProjectSectionView){

    /* The ProjectHomeView is a view to render the
     * project home tab (within ProjectSectionView) 
     * with a project TOC, ProjectFiltersView,
     * SearchResultsView, ProjectMapView, MarkdownView,
     * ProjectMembersView, and ProjectLogosView. 
     */
      var ProjectHomeView = ProjectSectionView.extend({

         /* Tab label and section name */
         tabInfo: {
            // title displayed on tab in ui
            tab_title: "Project Home", 
            // value of data-section and data-target id
            section_name: "project-home", 
            // should the tab be active when first loaded
            active_by_default: true,
         },

     });

     return ProjectHomeView;
});
