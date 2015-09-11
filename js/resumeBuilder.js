// Data Objects ////////////////////////////////////////////////

var bio = {
	name: "Rafael Pinienbaum",
	role: "Web Developer",
	contacts: {
		email: "hi@pinienbaum.com",
		github: "pinienbaum",
		location: "Berlin, Germany",
		mobile: "+49 176 79636108‬"
	},
	bioPic: "http://tinyurl.com/pqmxacz",
	welcomeMessage: "&ldquo;This is a little description of who I am, where I come from, what I do, who I am, where I come from, what I dowho I am, where I come from, what I do&rdquo;",
	skills: []
};

var work = {
	jobs: [
	{
		employer: "PinhoFCG",
		title: "Studio manager",
		dates: "2008 - present",
		location: "Sao Paulo, Brazil",
		description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
	},
	{
		employer: "Birtingur",
		title: "Associate Editor",
		dates: "2011 - 2012",
		location: "Reykjavik, Iceland",
		description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
	},
	{
		employer: "PK Arkitektar",
		title: "Project Architect",
		dates: "2006 - 2008",
		location: "Reykjavik, Iceland",
		description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
	}, 
]};

var projects = {
	projects: [
	{
		title: "Race Viz",
		dates: 2015,
		description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		images: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
	},
	{
		title: "Golden Ratio",
		dates: 2015,
		description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		images: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
	},
	{
		title: "Logis.Ninja, Apê.Ninja",
		dates: 2014,
		description: "Visual identity, landing page and prototype for a real estate startup based in Brasil and France. The company's goal is to move the rental process to the smartphone era, eliminating excessive paperwork, saving time for both tenants and landlords, and making the whole experience enjoyable.",
		images: ["http://s13.postimg.org/muyu20mlj/apeninja04.png", "http://s13.postimg.org/7kyyutr3b/apeninja01.png", "http://s13.postimg.org/6heuiv6g7/apeninja08.png"/*, "http://s22.postimg.org/p8953gidd/apeninja02.png"*/]
	},
	{
		title: "NyttLif website",
		dates: 2015,
		description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		images: ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
	}
]};

var education = {
	schools: [
	{
		name: "UCLA",
		location: "Los Angeles, CA",
		degree: "Certificate",
		subject: ["Cinematography / Directing"],
		dates: 2015,
		url: "https://www.uclaextension.edu"
	},
	{
		name: "Université Paris 8",
		location: "Paris, France",
		degree: "MA",
		subject: ["Contemporary Art / Photography"],
		dates: 2010,
		url: "https://www.univ-paris8.fr/en/"
	},
	{
		name: "UFMG",
		location: "Belo Horizonte, Brazil",
		degree: "BArch",
		subject: ["Architecture"],
		dates: 2004,
		url: "http://www.arq.ufmg.br/"
	}
],
	onlineCourses: [
	{
		school: "Udacity",
		title: "Nanodegree",
		subject: ["Front End Web Developping"],
		dates: 2015,
		url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
]};

var hobby = {
	hobbies: ["Triathlon","Experimental Cooking", "Nutrition Science", "Tennis"]
}

// Display Functions ////////////////////////////////////////////////

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedMobile = HTMLmobile.replace("%data", bio.contacts.mobile);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedEmailIcon = HTMLemailIcon.replace("%data%", "icons/email-icon-50px.png");
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").prepend(formattedBioPic);
	$("#header").prepend(formattedEmailIcon);
	$("#footerContacts").append(twitterButton);
	$("#footerContacts").append(githubButton);
//	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail, /*formattedGithub, */formattedMobile, formattedLocation);
	$("#description").append(formattedWelcomeMessage);
	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$('#skills').append(formattedSkill);
	}
};
bio.display();

education.display = function() {
	$('#education').append(HTMLschoolStart);
	for (i in education.schools) {
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
		$('.education-entry:last').append(formattedSchool);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$('.education-entry:last').append(formattedLocation);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$('.education-entry:last').append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$('.education-entry:last').append(formattedDates);
		for (j in education.schools[i].subject) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].subject[j]);
			$('.education-entry:last').append(formattedMajor);
		};	
	}
	$('.education-entry:last').append(HTMLonlineClasses);	
	for (k in education.onlineCourses) {

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
		$('.education-entry:last').append(formattedOnlineSchool);
		
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
		$('.education-entry:last').append(formattedOnlineTitle);
		
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
		$('.education-entry:last').append(formattedOnlineDates);

		// var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
		// $('.education-entry:last').append(formattedUrl);
		
		for (l in education.onlineCourses[k].subject) {
			var formattedOnlineSubject = HTMLonlineSubject.replace("%data%", education.onlineCourses[k].subject[l]);
			$('.education-entry:last').append(formattedOnlineSubject);
		};
	}
};
education.display();

work.display = function() {
	for (j in work.jobs) {
		console.log('j: ' + j);
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
		$('.work-entry:last').append(formattedEmployer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
		$('.work-entry:last').append(formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
		$('.work-entry:last').append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
		$('.work-entry:last').append(formattedLocation);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
		$('.work-entry:last').append(formattedWorkDescription);
	};
}								// when i pass the lines below into the function
work.display();					// everything below work experience disappears

projects.display = function() {
	for (i in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$('.project-entry:last').append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$('.project-entry:last').append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$('.project-entry:last').append(formattedDescription);		
		if (projects.projects[i].images.length > 0) {
			for (j in projects.projects[i].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
};
projects.display();

hobby.display = function () {
	$('#hobbies').append(HTMLhobbyStart);
	for (i in hobby.hobbies) {
		var formattedHobby = HTMLhobbyEntry.replace("%data%", hobby.hobbies[i]);
		$('.hobby-entry:last').append(formattedHobby);
	}
}
hobby.display();

// capitalizing function ////////////////////////////////////////
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
};

// capitalizing button /////////////////////////////////////////
// $('#main').append(internationalizeButton);

// google map /////////////////////////////////////////////////
$('#mapDiv').append(googleMap);



