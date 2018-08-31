const QUESTIONS = [

    //Question 1
    {
        number: 1,
        question: 'Header, nav, main, section, form, table, and footer elements are examples of specific tags that help communicate the meaning of the documents structure also known as:',
        correctAnswer: 'Semantic HTML',
        correctIndex: 1,
        questionType: 'html',
        points: 10,
        answers: [
            {
                answerLetter: 'A',
                answerDescription: 'Responsive Design',
                response: 'Oh snap! Wrong answer!  Responsive design may use semantic tags but you can easily develop responsive HTML without semantic HTML tags. Responsive design is handled with media queries.'
            },
            {
                answerLetter: 'B',
                answerDescription: 'Semantic HTML',
                response: '<strong>Great Job!</strong> These tags are known as semantic HTML tags. They are used to help web crawlers, coders, and screen readers understand the structure of the website and the current section they are on. Did you know that semantic HTML is more SEO friendly?'
            },
            {
                answerLetter: 'C',
                answerDescription: 'Literal HTML',
                response: '<strong>Oops! Wrong answer.</strong> Literal HTML is something that we made up for this quiz! There is no such thing as literal HTML.'
            },
            {
                answerLetter: 'D',
                answerDescription: 'HTML3',
                response: '<strong>Oops! Wrong answer.</strong> Literal HTML is something that we made up for this quiz! There is no such thing as literal HTML.'
            }
        ]
    },
    {
        number: 2,
        question: 'How do you create comments in your HTML code?',
        correctAnswer: '<!-- comment text -->',
        correctIndex: 2,
        questionType: 'html',
        points: 10,
        answers: [
            {
                answerLetter: 'A',
                answerDescription: '//comment text',
                response: 'Oh snap! Wrong answer! This is how you create inline comments in JavaScript code, not HTML.'
            },
            {
                answerLetter: 'B',
                answerDescription: '/* comment text */',
                response: 'Oops! Wrong answer! This is how you create comments in CSS and in Javascript for multi-line comments.'
            },
            {
                answerLetter: 'C',
                answerDescription: '&lt;!-- comment text -->',
                response: '<strong>Great Job!</strong> You can create comments in HTML by using this syntax. Did you know that many code editors have keyboard shortcuts to create comments quickly in the language you pick?'
            },
            {
                answerLetter: 'D',
                answerDescription: '&lt;!-- comment text !-->',
                response: '<strong>Oops! Wrong answer.</strong> Watch out the the extra eclamation point at the ending comment tag. The correct answer is C.'
            }
        ]
    },

    // Question 3

    {
        number: 3,
        question: 'Where do best practices tell you to link your JavaScript files in HTML?',
        correctAnswer: 'At the bottom of the body element before the closing tag',
        correctIndex: 2,
        questionType: 'html',
        points: 10,
        answers: [
            {
                answerLetter: 'A',
                answerDescription: 'In the &lt;head&gt; of the html',
                response: 'Oh snap! Wrong answer! A lot of people add their script tags in the head element but you want all of the html and css to load on the page first before manipulating with JS!'
            },
            {
                answerLetter: 'B',
                answerDescription: 'At the beginning of the body element',
                response: 'Opps! Wrong answer! Even though this would work, its not best practices because the entire document hasnt finished loading yet when the JS is called. Oh yeah, dont even think about inline JS!'
            },
            {
                answerLetter: 'C',
                answerDescription: 'At the bottom of the body element before the closing tag',
                response: '<strong>Great Job!</strong> This is exactly where you should put it. This allows the entire html document to load all sheets and render properly before the JS is called.'
            },
            {
                answerLetter: 'D',
                answerDescription: 'After the body element before the html closing tag &lt;/html&gt;',
                response: '<strong>Oops! Wrong answer.</strong> If its outside of the body tags it will not render properly. It might not through an error, but nothing will happen. Try again!'
            }
        ]
    },
//Question 4
    {
        number: 4,
        question: 'When you want to center block level elements versus inline elements which property and value is best?',
        correctAnswer: 'margin: auto;',
        correctIndex: 1,
        questionType: 'css',
        points: 10,
        answers: [
            {
                answerLetter: 'A',
                answerDescription: 'text-align: center;',
                response: 'Oh snap! Wrong answer! This is a common method to align inline elements, not block level elements!'
            },
            {
                answerLetter: 'B',
                answerDescription: 'margin: 0 auto;',
                response: '<strong>Yabadab Doo!!</strong> You nailed it! Margin separates elements from eachother so this will position the element within the parent!'
            },
            {
                answerLetter: 'C',
                answerDescription: 'padding: 25%;',
                response: '<strong>Shoot!</strong> This might format the element you targeted to expand a little bit, but in the long run this will cause lots of issues. Try rememebering which property moves elements away from each other.'
            },
            {
                answerLetter: 'D',
                answerDescription: 'display: center;',
                response: '<strong>Oops! Wrong answer.</strong> The display property does not have a value of center. The display property is commonly used to show or hide elements in the DOM! Not position them.'
            }
        ]
    },
//Question 5
    {
        number: 5,
        question: 'When selecting all the child anchor elements with a parent class of ‘.nav’ what is the proper syntax for CSS?',
        correctAnswer: '.nav a {styles}',
        correctIndex: 0,
        questionType: 'css',
        points: 10,
        answers: [
            {
                answerLetter: 'A',
                answerDescription: '.nav a {styles}',
                response: '<strong>Great Job!</strong> Youre hittin navs and selectin anchor ellies with no prob!'
            },
            {
                answerLetter: 'B',
                answerDescription: '#nav a {styles}',
                response: 'Opps! Wrong answer! This is selecting an ID not the class!'
            },
            {
                answerLetter: 'C',
                answerDescription: 'nav[“a”] {styles}',
                response: '<strong>Opps!</strong> This is a good choice! But its actually selecting the attribue not the class!'
            },
            {
                answerLetter: 'D',
                answerDescription: '.nav &lt;a&gt; {styles}',
                response: '<strong>Oops! Wrong answer.</strong> This wouldnt target anything! The anchor tag does start with an &lt;a&gt; but there is an easier way to select elements without tags.'
            }
        ]
    },
//Question 6
    {
        number: 6,
        question: 'When you want to space elements away from each other versus expanding the size of the targeted element, which CSS property is best?',
        correctAnswer: 'Margin',
        correctIndex: 1,
        questionType: 'css',
        points: 10,
        answers: [
            {
                answerLetter: 'A',
                answerDescription: 'Padding',
                response: '<strong>Oops! Wong answer.</strong> Padding expands the current element to larger. Think of it like adding padding during winter!'
            },
            {
                answerLetter: 'B',
                answerDescription: 'Margin',
                response: '<strong>Correct!</strong> I cant believe its not butter! Its margin!'
            },
            {
                answerLetter: 'C',
                answerDescription: 'Background-size',
                response: '<strong>Opps!</strong>  Background-size is a useful property that specifies the size of background images but will not adjust the width of any divs or elements.'
            },
            {
                answerLetter: 'D',
                answerDescription: 'Long-distance',
                response: '<strong>You know better!</strong> Long-distance never works.'
            }
        ]
    },
//Question 7 
    {
        number: 7,
        question: 'What is the proper syntax for a ‘for’ loop that runs a set of instructions 10 times and logs it to the console?',
        correctAnswer: 'for (let i = 0; i <= 9; i++) {console.log(i);}',
        correctIndex: 3,
        questionType: 'js',
        points: 10,
        answers: [
            {
                answerLetter: 'A',
                answerDescription: 'for (i = 1; i <= 10; i++) {console.log(i);}',
                response: '<strong>You might need to loop back on this challenge!</strong> This will only log to the console 9 times. Try again!'
            },
            {
                answerLetter: 'B',
                answerDescription: 'for (let i = 1; i <= 10; i++) {console.log(i);}',
                response: '<strong>This loop only had 9 lives!</strong> When you set i to equal 1, the loop will finish just before 10!'
            },
            {
                answerLetter: 'C',
                answerDescription: 'for (i <= 10; i = 1; i++) {console.log(i);}',
                response: '<strong>Almost!</strong> This might have thrown you for a loop. The statements are backwards. You need to set a value to the parameter before it can be looped!'
            },
            {
                answerLetter: 'D',
                answerDescription: 'for (let i = 0; i <= 9; i++) {console.log(i);}',
                response: '<strong>Nice job!</strong> Howd you know it was the last one in the loop? This properly sets the parameter to a value of zero, then loops through 10 times while incrementing each time! Dont forget to console log to see it in action!'
            }
        ]
    },
    //Question 8
    {
        number: 8,
        question: 'What does it mean to traverse the DOM?',
        correctAnswer: 'To navigate to specific nodes of the document object model',
        correctIndex: 0,
        questionType: 'js',
        points: 10,
        answers: [
            {
                answerLetter: 'A',
                answerDescription: 'To navigate to specific nodes of the document object model',
                response: '<strong>Aye aye captian! Thats correct!</strong> Much we learn only to forget it again, to stand by the goal, we must traverse all the way to it!'
            },
            {
                answerLetter: 'B',
                answerDescription: 'To hyperlink different pages together in HTML',
                response: '<strong>Careful Tarzan!</strong> Hyperlinks will traverse you to different pages.'
            },
            {
                answerLetter: 'C',
                answerDescription: 'To add specific elements to the HTML file',
                response: '<strong>Try again!</strong> Think of traversing as going Tarzan on the DOM! It allows you to jump tree to tree on the current document object model!'
            },
            {
                answerLetter: 'D',
                answerDescription: 'To remove specific pages from the HTML file',
                response: '<strong>Easy gunslinger!</strong> Traverse means to navigate not remove.'
            }
        ]
    },
    //Question 9
    {
        number: 9,
        question: 'The event.preventDefault(); method does what?',
        correctAnswer: '',
        correctIndex: 1,
        questionType: 'js',
        points: 10,
        answers: [
            {
                answerLetter: 'A',
                answerDescription: 'It allows you to use other language syntax',
                response: '<strong>Que?! No es cierto!</strong> This will prevent the default browser methods to submit. Like on a button!'
            },
            {
                answerLetter: 'B',
                answerDescription: 'This method prevents the default action of the event from occuring',
                response: '<strong>Correct!</strong> This is commonly used to prevent the browser from submitting forms and more!'
            },
            {
                answerLetter: 'C',
                answerDescription: 'This method does not exist',
                response: '<strong>Oops!</strong> Wrong answer. This is a common method to prevent forms and buttons from loading new pages'
            },
            {
                answerLetter: 'D',
                answerDescription: 'This method prevents the default css classes from loading',
                response: '<strong>Study up!</strong> The prevent default method will not change classes! It changes the elements actions.'
            }
        ]
    },
//Question 10
    {
        number: 10,
        question: 'Bonus JS Question! Default binding, object method binding, and explicit function binding are all common uses of which keyword?',
        correctAnswer: '',
        correctIndex: 0,
        questionType: 'js',
        points: 10,
        answers: [
            {
                answerLetter: 'A',
                answerDescription: 'This',
                response: '<strong>Correct!</strong> When used alone, "this" referes to the global object also known as default binding. Object method binding occurs when this refereces the object name, explicit function binding allows this to reference an object method with another object as the argument!'
            },
            {
                answerLetter: 'B',
                answerDescription: 'Bind',
                response: '<strong>Oops!</strong> As of JQuery 3, the bind() method has been deprecated. It was superseded by the .on() method for attaching event handlers to a document! Bind is also a method not a keyword!'
            },
            {
                answerLetter: 'C',
                answerDescription: 'Match',
                response: '<strong>Oops!</strong> Wrong answer. Match is a JQuery method that searchings a string for a match against a regular expression, and returns the matches, as an array object!'
            },
            {
                answerLetter: 'D',
                answerDescription: 'Append',
                response: '<strong>Study up!</strong> Append is a JQuery method that inserts content at the end of selected elements! '
            }
        ]
    }
];
