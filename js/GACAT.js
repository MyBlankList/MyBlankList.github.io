// GOOGLE ANALYTICS CTA TRACKING
$('.btn').click(function() {
var text = $(this).text();  // Grab the text from the button
var index = $('.btn').index(this); // Grab the button index (what button it is on the page)
var humanIndex = index + 1; // Button index usually starts at 0, so lets add 1 to make it human readable.
var trackedText = text + ' (' + humanIndex + ')'; // Set the recorded value, for example "Download (3)" for the third download button on the page.
gtag('event', 'Click', {'event_category': 'Button', 'event_label': trackedText);
});
