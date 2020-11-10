<template>
  <div class>
    <h1>
      Default Plan for:
      <strong>{{ district }}</strong>
    </h1>
    <div class="alert alert-success">
        <p>Default plan for district  was reset successfully !</p>
    </div>
    <nuxt-link
      to="/plp/reset"
      class="btn btn-secondary btn-rounded waves-effect waves-light goBack"
    >
      <span class="btn-label">
        <i class="mdi mdi-lock-reset"></i>
      </span>Reset Default Plan
    </nuxt-link>
    <form>
      <br />
      <div>
        <h2>
          <br />English Language Arts
        </h2>
        <div>
          <div class="form-group col-md-6 firstname">
            <label for="name">
              <strong>Minimum Number Of Credits Required ::</strong>
            </label>
            <input
              class="form-control"
              type="number"
              step="any"
              name="course[3405][credits]"
              value="25"
              placeholder
              maxlength="50"
              id="name"
            />
          </div>
        </div>
        <div class="row">
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 1 A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 1 A - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 1 B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 1 B - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>

          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 2 A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 2 A - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 2 B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 2 B - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 3 A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 3 A - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 3 B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 3 B - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 4 A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 4 A - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 4 B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English 4 B - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English: College Prep A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="English: College Prep B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="Intensive Reading A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3405][subcourses][]"
                required
                value="Intensive Reading B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center style="margin-top: 30px">
                <span
                  data-parent-course-id="3405"
                  data-course-type="course"
                  data-course-name="English Language Arts"
                  class="add_btn"
                >
                  <i
                    style="font-size: 4rem;color: green;background-color: unset;"
                    class="fas fa-plus"
                  ></i>
                </span>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>
          <br />Math
        </h2>
        <div>
          <div class="form-group col-md-6 firstname">
            <label for="name">
              <strong>Minimum Number Of Credits Required ::</strong>
            </label>
            <input
              class="form-control"
              type="number"
              step="any"
              name="course[3406][credits]"
              value="23"
              placeholder
              maxlength="50"
              id="name"
            />
          </div>
        </div>
        <div class="row">
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Algebra 1 A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Algebra 1 A - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Algebra 1 B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Algebra 1 B - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Algebra 2 A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Algebra 2 A - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Algebra 2 B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>

          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Algebra 2 B - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Algebra w/Financial Lit"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Applied Algebra A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Applied Algebra B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Geometry A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Geometry A - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Geometry B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Geometry B - Honors"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Informal Geometry A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Informal Geometry B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Intermediate Algebra A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Intermediate Algebra B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Liberal Arts Math 1 A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Liberal Arts Math 1 B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Liberal Arts Math 2 A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Liberal Arts Math 2 B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Math for College Readiness A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Math for College Readiness B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Precalculus A"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Precalculus B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center>
                <strong>Course Name</strong>
              </center>
              <input
                class="form-control"
                type="text"
                name="course[3406][subcourses][]"
                required
                value="Probability and Statistics B"
              />
              <center></center>
              <center>
                <button
                  type="button"
                  class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                >
                  <i class="fas fa-trash"></i> Remove
                </button>
              </center>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card-body">
              <center style="margin-top: 30px">
                <span
                  data-parent-course-id="3406"
                  data-course-type="course"
                  data-course-name="Math"
                  class="add_btn"
                >
                  <i
                    style="font-size: 4rem;color: green;background-color: unset;"
                    class="fas fa-plus"
                  ></i>
                </span>
              </center>
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <div>
          <h2>
            <br />Science
          </h2>
          <div>
            <div class="form-group col-md-6 firstname">
              <label for="name">
                <strong>Minimum Number Of Credits Required ::</strong>
              </label>
              <input
                class="form-control"
                type="number"
                step="any"
                name="course[3407][credits]"
                value="23"
                placeholder
                maxlength="50"
                id="name"
              />
            </div>
          </div>
          <div class="row">
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Anatomy/Physiology A"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Anatomy/Physiology B"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Biology 1 A"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Biology 1 A - Honors"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Biology 1 B"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Biology 1 B - Honors"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Chemistry 1 A"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Chemistry 1 B"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>

            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Earth/Space A"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Earth/Space B"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Environmental Science A"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Environmental Science B"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Marine Science A"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Marine Science B"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Physical Science A"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Physical Science B"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Physics A"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center>
                  <strong>Course Name</strong>
                </center>
                <input
                  class="form-control"
                  type="text"
                  name="course[3407][subcourses][]"
                  required
                  value="Physics B"
                />
                <center></center>
                <center>
                  <button
                    type="button"
                    class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                  >
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </center>
              </div>
            </div>
            <div class="card col-md-3">
              <div class="card-body">
                <center style="margin-top: 30px">
                  <span
                    data-parent-course-id="3407"
                    data-course-type="course"
                    data-course-name="Science"
                    class="add_btn"
                  >
                    <i
                      style="font-size: 4rem;color: green;background-color: unset;"
                      class="fas fa-plus"
                    ></i>
                  </span>
                </center>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div>
            <h2>
              <br />Social Studies
            </h2>
            <div>
              <div class="form-group col-md-6 firstname">
                <label for="name">
                  <strong>Minimum Number Of Credits Required ::</strong>
                </label>
                <input
                  class="form-control"
                  type="number"
                  step="any"
                  name="course[3408][credits]"
                  value="22"
                  placeholder
                  maxlength="50"
                  id="name"
                />
              </div>
            </div>
            <div class="row">
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="Civics"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="Economics"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="Economics w/Financial Lit"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="Economics w/Financial Lit - Honors"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="State History A"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="State History B"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="Government"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="US History A"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="US History A - Honors"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="US History B"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="US History B - Honors"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="Geography A"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="Geography B"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="World History A"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center>
                    <strong>Course Name</strong>
                  </center>
                  <input
                    class="form-control"
                    type="text"
                    name="course[3408][subcourses][]"
                    required
                    value="World History B"
                  />
                  <center></center>
                  <center>
                    <button
                      type="button"
                      class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                    >
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </center>
                </div>
              </div>
              <div class="card col-md-3">
                <div class="card-body">
                  <center style="margin-top: 30px">
                    <span
                      data-parent-course-id="3408"
                      data-course-type="course"
                      data-course-name="Social Studies"
                      class="add_btn"
                    >
                      <i
                        style="font-size: 4rem;color: green;background-color: unset;"
                        class="fas fa-plus"
                      ></i>
                    </span>
                  </center>
                </div>
              </div>
            </div>
            <div class="clear"></div>
            <div>
              <h2>
                <br />Electives
              </h2>
              <div>
                <div class="form-group col-md-6 firstname">
                  <label for="name">
                    <strong>Minimum Number Of Credits Required ::</strong>
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    step="any"
                    name="course[3409][credits]"
                    value="22"
                    placeholder
                    maxlength="50"
                    id="name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Career Explorations A"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Career Explorations B "
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Career Planning and Development"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Career Research and Decision Making"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Computer Science"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Digital Arts"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Financial Fitness"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Health"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Information Technology A"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Information Technology B"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Online (FL)"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Performing Fine Arts"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Personal Fitness"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Physical Education"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Psychology A"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Psychology B"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Service Hours"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="Sociology"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center>
                      <strong>Course Name</strong>
                    </center>
                    <input
                      class="form-control"
                      type="text"
                      name="course[3409][subcourses][]"
                      required
                      value="World Language"
                    />
                    <center></center>
                    <center>
                      <button
                        type="button"
                        class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                      >
                        <i class="fas fa-trash"></i> Remove
                      </button>
                    </center>
                  </div>
                </div>
                <div class="card col-md-3">
                  <div class="card-body">
                    <center style="margin-top: 30px">
                      <span
                        data-parent-course-id="3409"
                        data-course-type="course"
                        data-course-name="Electives"
                        class="add_btn"
                      >
                        <i
                          style="font-size: 4rem;color: green;background-color: unset;"
                          class="fas fa-plus"
                        ></i>
                      </span>
                    </center>
                  </div>
                </div>
              </div>
              <div class="clear"></div>
              <div>
                <h2>
                  <br />State Assessments
                </h2>
                <div></div>
                <div class="row">
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3410][subcourses][]"
                        required
                        value="Algebra EOC"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3410][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3410][subcourses][]"
                        required
                        value="Biology EOC"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3410][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3410][subcourses][]"
                        required
                        value="US Government EOC"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3410][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3410][subcourses][]"
                        required
                        value="Geography EOC"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3410][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3410][subcourses][]"
                        required
                        value="PERT"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3410][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3410][subcourses][]"
                        required
                        value="FCAT"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3410][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3410][subcourses][]"
                        required
                        value="FSA"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3410][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body">
                      <center style="margin-top: 30px">
                        <span
                          data-parent-course-id="3410"
                          data-course-type="assessment"
                          data-course-name="State Assessments"
                          class="add_btn"
                        >
                          <i
                            style="font-size: 4rem;color: green;background-color: unset;"
                            class="fas fa-plus"
                          ></i>
                        </span>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clear"></div>
              <div>
                <h2>
                  <br />National Assessments
                </h2>
                <div></div>
                <div class="row">
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3411][subcourses][]"
                        required
                        value="PSAT"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3411][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3411][subcourses][]"
                        required
                        value="SAT"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3411][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3411][subcourses][]"
                        required
                        value="ACT"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3411][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body">
                      <center style="margin-top: 30px">
                        <span
                          data-parent-course-id="3411"
                          data-course-type="assessment"
                          data-course-name="National Assessments"
                          class="add_btn"
                        >
                          <i
                            style="font-size: 4rem;color: green;background-color: unset;"
                            class="fas fa-plus"
                          ></i>
                        </span>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clear"></div>
              <div>
                <h2>
                  <br />Local Assessments
                </h2>
                <div></div>
                <div class="row">
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3412][subcourses][]"
                        required
                        value="GPI"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3412][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3412][subcourses][]"
                        required
                        value="MAP"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3412][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body">
                      <center style="margin-top: 30px">
                        <span
                          data-parent-course-id="3412"
                          data-course-type="assessment"
                          data-course-name="Local Assessments"
                          class="add_btn"
                        >
                          <i
                            style="font-size: 4rem;color: green;background-color: unset;"
                            class="fas fa-plus"
                          ></i>
                        </span>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clear"></div>
              <div>
                <h2>
                  <br />Career + College Planning Assessments
                </h2>
                <div></div>
                <div class="row">
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3413][subcourses][]"
                        required
                        value="Accuplacer"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3413][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body" style="padding-top: 9px;">
                      <center>
                        <strong>Assessment Name</strong>
                      </center>
                      <input
                        class="form-control"
                        type="text"
                        name="course[3413][subcourses][]"
                        required
                        value="ASVAB"
                      />
                      <center>
                        <strong>Minimum Score</strong>
                        <div>
                          <input class="form-control" name="course[3413][subcourses_score][]" value />
                          <input
                            type="checkbox"
                            style="margin-top: 7px;"
                            value="1"
                            name
                            onclick="this.previousElementSibling.value=(this.checked)?1:0;"
                          /> Tier 5
                        </div>
                      </center>
                      <center>
                        <button
                          type="button"
                          class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"
                        >
                          <i class="fas fa-trash"></i> Remove
                        </button>
                      </center>
                    </div>
                  </div>
                  <div class="card col-md-3">
                    <div class="card-body">
                      <center style="margin-top: 30px">
                        <span
                          data-parent-course-id="3413"
                          data-course-type="assessment"
                          data-course-name="Career + College Planning Assessments"
                          class="add_btn"
                        >
                          <i
                            style="font-size: 4rem;color: green;background-color: unset;"
                            class="fas fa-plus"
                          ></i>
                        </span>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.general-input {
  margin-top: 24px !important;
}
.assessment-input {
  width: 60% !important;
  margin-bottom: 4px !important;
}
form input[type="submit"] {
  position: fixed;
  right: 30px;
  bottom: 40px;
  z-index: 99;
  box-shadow: 0 0 5px #000;
  border: 1px solid #ccc;
}
.card {
  float: left;
  border: solid 1px #f5f5f5;
  min-height: 179px;
}
.whit-color {
  color: #fff;
}
button {
  margin-top: 10px;
}
.alert {
  padding: 10px;
  margin-bottom: 10px;
}

.alert-success {
  background-color: green;
  color: #fff;
}

.alert-danger {
  background-color: red;
  color: #fff;
}

.alert p {
  margin-bottom: 0;
}
</style>


<script>
var planAllDetailsObj = {"English Language Arts":{"course_id":3405,"has_score":0,"type":1,"credits":25,"course_name":"English Language Arts","score":null,"SubCourses":[{"course_id":3414,"course_name":"English 1 A","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3415,"course_name":"English 1 A - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3416,"course_name":"English 1 B","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3417,"course_name":"English 1 B - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3418,"course_name":"English 2 A","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3419,"course_name":"English 2 A - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3420,"course_name":"English 2 B","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3421,"course_name":"English 2 B - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3422,"course_name":"English 3 A","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3423,"course_name":"English 3 A - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3424,"course_name":"English 3 B","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3425,"course_name":"English 3 B - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3426,"course_name":"English 4 A","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3427,"course_name":"English 4 A - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3428,"course_name":"English 4 B","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3429,"course_name":"English 4 B - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3430,"course_name":"English: College Prep A","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3431,"course_name":"English: College Prep B","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3432,"course_name":"Intensive Reading A","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null},{"course_id":3433,"course_name":"Intensive Reading B","score":null,"has_score":0,"type":2,"parent_course_id":3405,"tier5":null}]},"Math":{"course_id":3406,"has_score":0,"type":1,"credits":23,"course_name":"Math","score":null,"SubCourses":[{"course_id":3434,"course_name":"Algebra 1 A","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3435,"course_name":"Algebra 1 A - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3436,"course_name":"Algebra 1 B","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3437,"course_name":"Algebra 1 B - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3438,"course_name":"Algebra 2 A","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3439,"course_name":"Algebra 2 A - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3440,"course_name":"Algebra 2 B","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3441,"course_name":"Algebra 2 B - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3442,"course_name":"Algebra w\/Financial Lit","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3443,"course_name":"Applied Algebra A","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3444,"course_name":"Applied Algebra B","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3445,"course_name":"Geometry A","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3446,"course_name":"Geometry A - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3447,"course_name":"Geometry B","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3448,"course_name":"Geometry B - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3449,"course_name":"Informal Geometry A","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3450,"course_name":"Informal Geometry B","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3451,"course_name":"Intermediate Algebra A","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3452,"course_name":"Intermediate Algebra B","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3453,"course_name":"Liberal Arts Math 1 A","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3454,"course_name":"Liberal Arts Math 1 B","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3455,"course_name":"Liberal Arts Math 2 A","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3456,"course_name":"Liberal Arts Math 2 B","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3457,"course_name":"Math for College Readiness A","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3458,"course_name":"Math for College Readiness B","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3459,"course_name":"Precalculus A","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3460,"course_name":"Precalculus B","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3461,"course_name":"Probability and Statistics A","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null},{"course_id":3462,"course_name":"Probability and Statistics B","score":null,"has_score":0,"type":2,"parent_course_id":3406,"tier5":null}]},"Science":{"course_id":3407,"has_score":0,"type":1,"credits":23,"course_name":"Science","score":null,"SubCourses":[{"course_id":3463,"course_name":"Anatomy\/Physiology A","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3464,"course_name":"Anatomy\/Physiology B","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3465,"course_name":"Biology 1 A","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3466,"course_name":"Biology 1 A - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3467,"course_name":"Biology 1 B","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3468,"course_name":"Biology 1 B - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3469,"course_name":"Chemistry 1 A","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3470,"course_name":"Chemistry 1 B","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3471,"course_name":"Earth\/Space A","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3472,"course_name":"Earth\/Space B","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3473,"course_name":"Environmental Science A","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3474,"course_name":"Environmental Science B","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3475,"course_name":"Marine Science A","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3476,"course_name":"Marine Science B","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3477,"course_name":"Physical Science A","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3478,"course_name":"Physical Science B","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3479,"course_name":"Physics A","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null},{"course_id":3480,"course_name":"Physics B","score":null,"has_score":0,"type":2,"parent_course_id":3407,"tier5":null}]},"Social Studies":{"course_id":3408,"has_score":0,"type":1,"credits":22,"course_name":"Social Studies","score":null,"SubCourses":[{"course_id":3481,"course_name":"Civics","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3482,"course_name":"Economics","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3483,"course_name":"Economics w\/Financial Lit","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3484,"course_name":"Economics w\/Financial Lit - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3485,"course_name":"State History A","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3486,"course_name":"State History B","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3487,"course_name":"Government","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3488,"course_name":"US History A","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3489,"course_name":"US History A - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3490,"course_name":"US History B","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3491,"course_name":"US History B - Honors","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3492,"course_name":"Geography A","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3493,"course_name":"Geography B","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3494,"course_name":"World History A","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null},{"course_id":3495,"course_name":"World History B","score":null,"has_score":0,"type":2,"parent_course_id":3408,"tier5":null}]},"Electives":{"course_id":3409,"has_score":0,"type":1,"credits":22,"course_name":"Electives","score":null,"SubCourses":[{"course_id":3496,"course_name":"Career Explorations A","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3497,"course_name":"Career Explorations B ","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3498,"course_name":"Career Planning and Development","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3499,"course_name":"Career Research and Decision Making","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3500,"course_name":"Computer Science","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3501,"course_name":"Digital Arts","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3502,"course_name":"Financial Fitness","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3503,"course_name":"Health","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3504,"course_name":"Information Technology A","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3505,"course_name":"Information Technology B","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3506,"course_name":"Online (FL)","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3507,"course_name":"Performing Fine Arts","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3508,"course_name":"Personal Fitness","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3509,"course_name":"Physical Education","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3510,"course_name":"Psychology A","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3511,"course_name":"Psychology B","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3512,"course_name":"Service Hours","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3513,"course_name":"Sociology","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null},{"course_id":3514,"course_name":"World Language","score":null,"has_score":0,"type":2,"parent_course_id":3409,"tier5":null}]},"State Assessments":{"course_id":3410,"has_score":1,"type":1,"credits":0,"course_name":"State Assessments","score":null,"SubCourses":[{"course_id":3515,"course_name":"Algebra EOC","score":"","has_score":1,"type":2,"parent_course_id":3410,"tier5":null},{"course_id":3516,"course_name":"Biology EOC","score":"","has_score":1,"type":2,"parent_course_id":3410,"tier5":null},{"course_id":3517,"course_name":"US Government EOC","score":"","has_score":1,"type":2,"parent_course_id":3410,"tier5":null},{"course_id":3518,"course_name":"Geography EOC","score":"","has_score":1,"type":2,"parent_course_id":3410,"tier5":null},{"course_id":3519,"course_name":"PERT","score":"","has_score":1,"type":2,"parent_course_id":3410,"tier5":null},{"course_id":3520,"course_name":"FCAT","score":"","has_score":1,"type":2,"parent_course_id":3410,"tier5":null},{"course_id":3521,"course_name":"FSA","score":"","has_score":1,"type":2,"parent_course_id":3410,"tier5":null}]},"National Assessments":{"course_id":3411,"has_score":1,"type":1,"credits":12,"course_name":"National Assessments","score":null,"SubCourses":[{"course_id":3522,"course_name":"PSAT","score":"","has_score":1,"type":2,"parent_course_id":3411,"tier5":null},{"course_id":3523,"course_name":"SAT","score":"","has_score":1,"type":2,"parent_course_id":3411,"tier5":null},{"course_id":3524,"course_name":"ACT","score":"","has_score":1,"type":2,"parent_course_id":3411,"tier5":null}]},"Local Assessments":{"course_id":3412,"has_score":1,"type":1,"credits":12,"course_name":"Local Assessments","score":null,"SubCourses":[{"course_id":3525,"course_name":"GPI","score":"","has_score":1,"type":2,"parent_course_id":3412,"tier5":null},{"course_id":3526,"course_name":"MAP","score":"","has_score":1,"type":2,"parent_course_id":3412,"tier5":null}]},"Career + College Planning Assessments":{"course_id":3413,"has_score":1,"type":1,"credits":12,"course_name":"Career + College Planning Assessments","score":null,"SubCourses":[{"course_id":3527,"course_name":"Accuplacer","score":"","has_score":1,"type":2,"parent_course_id":3413,"tier5":null},{"course_id":3528,"course_name":"ASVAB","score":"","has_score":1,"type":2,"parent_course_id":3413,"tier5":null}]}};
$(document).on("click", ".delete_btn", function(e) {
  e.preventDefault();
  var confirm = window.confirm("are you sure you want to remove this class ?");
  if (confirm) {
    $(this)
      .parent()
      .parent()
      .parent()
      .remove();
  }
});
$(document).on("click", ".add_btn", function(e) {
  e.preventDefault();
  var parentCourseId = $(this).attr("data-parent-course-id");
  var course_type = $(this).attr("data-course-type");
  console.log(parentCourseId);
  var parent_course_name = $(this).attr("data-course-name");
  var course_subcourses = planAllDetailsObj[parent_course_name].SubCourses;
  var has_subcourses = planAllDetailsObj[parent_course_name].SubCourses.length;
  var selectCourseHtml = "";
  var view_input = has_subcourses ? "none" : "block";
  var view_select = has_subcourses ? "block" : "none";
  selectCourseHtml +=
    '<select class="form-control new_course_select general-input" name="course[' +
    parentCourseId +
    '][subcourses_id][]" style="display:' +
    view_select +
    '" >';

  course_subcourses.forEach(function(entry) {
    selectCourseHtml +=
      '<option value="' +
      entry.course_id +
      '" >' +
      entry.course_name +
      "</option>";
  });
  selectCourseHtml += '<option value="other" >Other</option>';
  selectCourseHtml += "</select>";

  if (course_type == "assessment") {
    selectCourseHtml +=
      '<input class="form-control" style="display:' +
      view_input +
      '"    type="text"  name="course[' +
      parentCourseId +
      '][subcourses][]"  value="" placeholder="Course Name" >';
  } else {
    selectCourseHtml +=
      '<input class="form-control" style="display:' +
      view_input +
      '" class="general-input" type="text" placeholder="Course Name" name="course[' +
      parentCourseId +
      '][subcourses][]"  value="">';
  }
  if (course_type == "assessment") {
    var newCourseBox =
      '<div class="card col-md-3"  >					 <div class="card-body" style="padding-top: 9px;"><center>					 		<strong>				 		Assessment Name					 		</strong>					 	</center>								' +
      selectCourseHtml +
      '										<center>														<strong>Minimum Score </strong> 	<div>						<input class="form-control" name="course[' +
      parentCourseId +
      '][subcourses_score][]" value=""   class="assessment-input" />				<input type="hidden" name="course[' +
      parentCourseId +
      '][hasSubcourses_score][]" value="1"  />						<input type="hidden" name="course[' +
      parentCourseId +
      '][subcourses_tier5][]" value="0" >							<input  type="checkbox" style="margin-top: 7px;" value="1"  name=""  onclick="this.previousElementSibling.value=(this.checked)?1:0;" /> Tier 5			</div>									</center>								<center>							<button type="button" class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"><i class="fas fa-trash"></i> Remove</button>						</center>					</div>				</div>';
  } else {
    var newCourseBox =
      '<div class="card col-md-3"  >					 <div class="card-body"><center>					 		<strong>				 		Course Name					 		</strong>					 	</center>									' +
      selectCourseHtml +
      ' 						<center>							<button type="button" class="delete_btn btn btn-secondary btn-rounded waves-effect waves-light"><i class="fas fa-trash"></i> Remove</button>						</center>					</div>				</div>';
  }

  $(this)
    .parent()
    .parent()
    .parent()
    .before(newCourseBox);
});
$(document).on("change", ".new_course_select", function(e) {
  var course_name_value = $(this)
    .children("option:selected")
    .val();
  if (course_name_value == "other") {
    $(this)
      .next()
      .show();
  } else {
    $(this)
      .next()
      .hide();
  }
});

export default {
  props: {
    district: String
  },
  data() {
    return {};
  }
};
</script>