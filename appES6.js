class Course {
    constructor(title,instructor,image){
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

class UI {   
    addCourseToList(course){
        const list = document.getElementById('course-list');

        var html = `
            <tr>
                <td><img src="img/${course.image}"></img></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
            </tr>
        `;
        list.innerHTML += html;
    } 

    clearControls(){
        const title = document.getElementById('title').value="";
        const instructor = document.getElementById('instructor').value="";
        const image = document.getElementById('image').value="";
    }

    deleteCourse(element){
        if (element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
        }
    }

    showAlert(message,className){
        var alert = `
        <div class="alert alert-${className}">
            ${message}
        </div>
    `;
    const row = document.querySelector('.row');
    //beforeBegin,afterBegin,beforeEnd,afterEnd     --  öncesine veya sonrasına atama yapmak için kullanılır
    row.insertAdjacentHTML('beforeBegin',alert);
    setTimeout(()=> {
        document.querySelector('.alert').remove();
    },2500);
    }
}

document.getElementById('new-course').addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //kurs objesi oluşturma
    const course = new Course(title,instructor,image);

    //create ui
    const ui = new UI();
    if(title==='' || instructor==='' || image===''){
        ui.showAlert('Lütfen tüm alanları doldurunuz.','warning');  // bootstrap warning alerti
    }else {
        // ADD course to list
        ui.addCourseToList(course);
        // clear controls
        ui.clearControls();

        ui.showAlert('Kurs eklendi.','success');    // bootstrap success alerti.
    }

    e.preventDefault();     // submit olayını kesme işlemi.
});

document.getElementById('course-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteCourse(e.target); 
    ui.showAlert('Kursu sildiniz.','danger');  
});