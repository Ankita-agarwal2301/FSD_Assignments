<!DOCTYPE html>
<html lang="en">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>



<head>
 <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <script src="js/api.js"></script> -->
    <!-- <script src="js/fetchapi.js"></script> -->


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Keep-Board</title>
</head>

<body>
	<!-- Create a form which will have text boxes for Note title, content and status along with a Add 
		 button. Handle errors like empty fields.  (Use dropdown-list for NoteStatus) -->

	<!-- display all existing notes in a tabular structure with Title,Content,Status, Created Date and Action -->
	
	<!-- Create a form which will have text boxes for Note ID, title, content and status along with a Send 
		 button. Handle errors like empty fields -->
      <!-- <div class="container mt-5">
          <h3 id='error-message' style="color:red;font-size:1em"></h3>
    <table class="table table-dark table-striped" id='repo-list-table'>
        <thead>
          <tr>
            <th scope="col">URL</th>
            <th scope="col">Owner</th>
            <th scope="col">Issues</th>
            <th scope="col">Fork Count</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </div> -->

    <div class="container">

        
            <div class="jumbotron text-center mt-5">
                <h2>NOTE APP</h2>
            </div>

            <form method="POST" action="add">
                    <div class="form-group">
                        <label for="exampleInputPassword1">ID</label>
                        <input type="text" class="form-control" id="ID" placeholder="ID" name="noteId">
                    </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1">Title</label>
                        <input type="text" class="form-control" id="title" placeholder="Title" name="noteTitle">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Content</label>
                      <input type="text" class="form-control" id="content" aria-describedby="emailHelp" placeholder="Enter note content" name="noteContent">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Status</label>
                      <input type="text" class="form-control" id="status" placeholder="Enter Status" name="noteStatus">
                    </div>
                      <!-- <div class="form-group">
                      <label for="exampleInputPassword1">Created Date</label>
                      <input type="number" class="form-control" id="createdAt" placeholder="" name="createdAt">
                    </div> -->
                   
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                  <small style ="color:green" id="status"></small>
                  
                  <small style ="color:red" id="errMessage"></small>
                  <table class="table mt-5">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created Date</th>
                             <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody id='table-body'>
                       <!-- This should fetch the students details form DB  and display here-->
                       <!-- used core tag forEach -->
                       <c:forEach items="${noteList}" var="note">
                       <tr>
                       <td>${note.noteId}</td>
                        <td>${note.noteTitle}</td>
                         <td>${note.noteContent}</td>
                          <td>${note.noteStatus}</td>
                           <td>${note.createdAt}</td>
                          <td><a href="update?note=${note}"><i class="fa fa-edit" style ="color:grey;font-size:1.2em"></i></a></td>
                          <td><a href="delete?noteId=${note.noteId}"><i class="fa fa-trash" style ="color:red;font-size:1.2em"></i></a></td>
                       </tr>
                       </c:forEach>
                       
                        </tbody>
                      </table>

       

    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
 
</body>

</html>