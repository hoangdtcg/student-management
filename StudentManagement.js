class StudentManagement {
    constructor() {
        this.students = [];
    }

    //Hiển thị toàn bộ học sinh

    getTitle(){
        let str = `<tr>
                       <th>ID</th>
                       <th>Avatar</th>
                       <th>Full Name</th>
                       <th>Gender</th>
                       <th>Group</th>
                       <th>Birthday</th>
                       <th>Address</th>
                       <th colspan="2">Action</th>
                   </tr>`;
        return str;
    }

    display(){
        let str = this.getTitle();
        for (let i = 0; i < this.students.length; i++) {
            str += `<tr>
                        <td>${this.students[i].id}</td>
                        <td><img src="${this.students[i].avatar}" alt="${this.students[i].name}"></td>
                        <td>${this.students[i].name}</td>
                        <td>${this.students[i].gender}</td>
                        <td>${this.students[i].group}</td>
                        <td>${this.students[i].birthday}</td>
                        <td>${this.students[i].address}</td>
                        <td><button>Edit</button></td>
                        <td><button onclick="deleteStudent(${i})">Delete</button></td>
                    </tr>`;
        }

        return str;
    }

    //Thêm học sinh
    add(student){
        this.students.push(student);
    }

    //Xóa học sinh
    del(index){
        this.students.splice(index,1);
    }

    //Sửa học sinh
    edit(index){}


}
