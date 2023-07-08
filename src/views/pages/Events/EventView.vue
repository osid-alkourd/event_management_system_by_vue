<template>
    <SideBar></SideBar>
    <section class="section">
                    <div class="row" id="table-contexual">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Events</h4>
                                </div>
                                <div class="card-content">
                                    
                                    <!-- table contextual / colored -->
                                    <div class="table-responsive">
                                        <table class="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Even Name</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">From to date</th>
                                                    <th scope="col">attendees number</th>
                                                    <th scope="col">Hall</th>
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
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>
                                                       <button type="button" class="btn btn-primary">Update</button>
                                                    </td>
                                                    <td>
                                                       <button type="button" class="btn btn-danger">delete</button>
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
        export default{
        components : {Footer , SideBar}
        }
</script>

<style>

</style>