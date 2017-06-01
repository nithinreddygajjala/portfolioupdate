// *BIO SECTION*
var bio = {
    "name" : "Nithin Reddy Gajjala",
    "role" : "Front End Developer",
    "welcomeMessage" : "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLooking for a job in the field of web development",
    "skills" : ["HTML", "CSS", "Javascript","Java","C","C++","Knockout.js","Backbone.js","Software Engineering"],
    "contacts" : {
        "mobile" : "(484) 300-7876",
        "email" : "nithing@csu.fullerton.edu",
        "github" : "nithinreddy8",
        "location": "Fullerton, CA"
    },
    "biopic" : "images/nithin.jpg"
};

// *WORK SECTION*
var work = {
    "jobs" : [
        {
            "employer" : "929 Software Solutions",
            "title" : "Web Developer",
            "location" : "Hyderabad",
            "dates" : "May 2015 - Dec 2015",
            "description" : "My job was to maintain the company website and server-side programming using the JSP and servlets. "
        },
        {
            "employer" : "Mahivar .Inc",
            "title" : "Intern",
            "location" : "Hyderabad",
            "dates" : "january 2015 - April 2015",
            "description" : "I worked as an Intern , and collaboarated with them in developing a database tool"
        }
    ]
};

// *PROJECTS SECTION*
var projects = {
    "projects" : [
        {
            "title" : "Online Quiz ",
            "dates" : "2015",
            "description" : "An j2EE based application to conduct the online exams",
            "images":
            [
              "images/p1.jpg"
            ]
           
        },
        {
            "title" : "Neighborhood map",
            "dates" : "2016",
            "description" : "A single page application gives the information about the local neighborhood",
            "images":
            [
              "images/p2.png"
            ]
            
        }
    ]
};

// *EDUCATION SECTION*
var education = {
    "schools" : [
        {
            "name" : "CVR College of Engineering",
            "location" : "Hyderabad",
            "degree" : "Bachelors",
            "majors" : ["Computer Science"],
            "dates" : "2011 - 2015",
            "url" : "cvr.ac.in"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-end Web Development",
            "school" : "Udacity",
            "dates" : "2016",
            "url" : "https://www.udacity.com"
        }
    ]
};

bio.display = function () {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
 
  formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      for(var i=0;i<bio.skills.length;i++) {
          $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }

  for (var i=0; i<formattedContactInfo.length;i++) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
  }
};


work.display = function () {

    if (work.jobs.length > 0) {

      $("#workExperience").append(HTMLworkStart);

      for (var i=0;i<work.jobs.length;i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

        $(".work-entry:last").append(formattedEmployerWorkTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedDatesWorked);
        $(".work-entry:last").append(formattedWorkDescription);
      }

    }
};

projects.display = function () {

  if(projects.projects.length > 0) {
    for (var i=0;i<projects.projects.length;i++) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      for (var img=0;img< projects.projects[i].images.length;img++) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry:last").append(formattedProjectImage);
      }

    }
  }
};

education.display = function () {

  if(education.schools.length > 0 || education.onlineCourses.length > 0) {
    for (var i=0 ;i< education.schools.length;i++) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    };

    if(education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (var i=0;i< education.onlineCourses.length;i++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
      }
    }

  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
