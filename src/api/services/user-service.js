import instance from "services/api";

class UserService {
  getStudents(params) {
    return instance.get("/dashboard/v1/user/students", {
      params,
    });
  }

  getStudent(userId) {
    return instance.get(`/dashboard/v1/user/${userId}`);
  }

  deletStudent(userId) {
    return instance.delete(`/dashboard/v1/user/${userId}`);
  }

  creatStudent(user) {
    return instance.post(`/dashboard/v1/user`, user);
  }
}

const userService = new UserService();

export default userService;