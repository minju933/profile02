//프로젝트 클릭하면 해당 프로젝트만 표현하기//

const buttons = document.querySelectorAll('.category_button');
const projects = document.querySelectorAll('.project');
buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        const filter = event.target.dataset.category;
        projects.forEach(function(project){
            if (filter === 'all'|| filter === project.dataset.type) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        })
        const selected = document.querySelector('.category_selected');
       selected.classList.remove('category_selected');
       event.target.classList.add('category_selected');
    })
})