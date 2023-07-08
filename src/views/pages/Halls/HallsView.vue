<template>
  <SideBar></SideBar>
  <section class="section">
    <div class="row" id="table-contexual">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Halls</h4>
          </div>
          <div class="card-content">
            <!-- table contextual / colored -->
            <div class="table-responsive">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Hall Name</th>
                    <th scope="col">The building's name</th>
                    <th scope="col">absorptive capacity</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Michael Right</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>

                    <td>
                      <button type="button" class="btn btn-primary">
                        Update
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger">
                        delete
                      </button>
                    </td>
                  </tr>

                  <tr v-for="hall in result" v-bind:key="hall._id">
                    <td>{{ hall._id }}</td>
                    <td>{{ hall.name }}</td>
                    <td>{{ hall.Building }}</td>
                    <td>{{ hall.absorptiveCapacit }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-warning"
                        @click="edit(hall)"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="remove(hall)"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import SideBar from "../../../components/SideBar.vue";
import axios from "axios";

export default {
  components: { Footer, SideBar },
  data() {
    return {
      result: [],
      hall: {
        _id: "",
        name: "",
        Building: "",
        absorptiveCapacity: "",
      },
    };
  },
  methods: {
    hallsLoad() {
      var halls = "http://localhost:3000/halls";
      axios.get(halls).then(({ data }) => {
        console.log(data);
        this.result = data.data;
      });
    },
  },
};
</script>

<style>
</style>