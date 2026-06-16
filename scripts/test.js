// var contentful = require('contentful');

var client = contentful.createClient({
  space: '0tdh2ayf577o',
  accessToken: 'G61XeAqSd8v3WvLbxWAHw-LxKP5qRV1cWNvUEd78ZIY',
});

// client.getEntry('5rdaghE7lWxOG7BPMiHtE4').then(function (entry) {
//   // logs the entry metadata
//   console.log(entry.sys);

//   // logs the field with ID title
//   console.log(entry.fields.title);
//   var workTitle = entry.fields.title;
//   var image = entry.fields.workImage;
//   console.log(image[0].fields.file.url);
//   var imageUrl = image[0].fields.file.url;

  

//   const imgTesting = document.getElementById("testImg");
// imgTesting.src = imageUrl;
// });


client.getEntries().then(function (entries) {

    const gallery = document.getElementById("galleryTest");

    var newImg = document.createElement("img");
    var image = "";
    var imageUrl = "";
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if (entry.fields.title) {
        image = entry.fields.workImage;
        imageUrl = image[0].fields.file.url;
        newImg.src = imageUrl;
        newImg.dataset.title=entry.fields.title;
        // $("newImg").attr("data-title",entry.fields.title);
        // $("newImg").attr("data-size", "placeholder");
        // $("newImg").attr("data-medium", "placeholder");
        // $("newImg").attr("data-desc", "placeholder");



        gallery.appendChild(newImg);

        newImg = document.createElement("img")

        console.log(newImg.src);
    }
  });
});

// <img src="/images/illustration/cr0-concept-art.jpg" data-title="concept art: CR-0 (2026)"
// 						data-size="digital" data-medium="made in procreate" data-desc="character concept art for CR-0, a refurbished cybernetic
// 						companion inspired by my roommate."
// 						alt="An illustration of a humanoid robot rendered in shades of pink and purple."></img>