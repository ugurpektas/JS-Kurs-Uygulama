// Course Constructer
function Course (title,instructor,image){
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

// UI Constructer
function UI(){

}

document.getElementById('new-course').addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //kurs objesi oluşturma
    const course = new Course(title,instructor,image);

    console.log(course);
    //save to database
    

    // show on the ui




    e.preventDefault();     // submit olayını kesme işlemi.
});
