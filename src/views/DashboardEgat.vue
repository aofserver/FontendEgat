<template>
  <div>
    
    <div style="display: flex; justify-content: space-evenly;">
    <CCard style="width: 300px;">
      <CCardBody>
        <p style="text-align: end; font-size:25px;">{{this.crad0.description}}</p>
        <div style="display: flex; justify-content: flex-end; ">
          <p style="margin: 0 5px 0 0; font-size:20px;">{{this.crad0.value}}</p>
          <p style="font-size:15px; line-height: 35px">{{this.crad0.unit}}</p>
        </div>
        <div style="display: flex;">
          <p style="text-align: start; font-size:15px;">{{this.crad0.timestamp}}</p>
          <CButton v-on:click="showGraph()" color="secondary" style="margin: 0 0 0 auto;">Graph</CButton>
        </div>
      </CCardBody>
    </CCard>
    </div>

    <div style="display: flex; justify-content: space-evenly;">
    <CCard style="width: 300px;">
      <CCardBody>
        <p style="text-align: end; font-size:25px;">{{this.crad1.description}}</p>
        <div style="display: flex; justify-content: flex-end; ">
          <p style="margin: 0 5px 0 0; font-size:20px;">{{this.crad1.value}}</p>
          <p style="font-size:15px; line-height: 35px">{{this.crad1.unit}}</p>
        </div>
        <div style="display: flex;">
          <p style="text-align: start; font-size:15px;">{{this.crad1.timestamp}}</p>
          <CButton v-on:click="showGraph()" color="secondary" style="margin: 0 0 0 auto;">Graph</CButton>
        </div>
      </CCardBody>
    </CCard>

    <CCard style="width: 300px;">
      <CCardBody>
        <p style="text-align: end; font-size:25px;">{{this.crad2.description}}</p>
        <div style="display: flex; justify-content: flex-end; ">
          <p style="margin: 0 5px 0 0; font-size:20px;">{{this.crad2.value}}</p>
          <p style="font-size:15px; line-height: 35px">{{this.crad2.unit}}</p>
        </div>
        <div style="display: flex;">
          <p style="text-align: start; font-size:15px;">{{this.crad2.timestamp}}</p>
          <CButton v-on:click="showGraph()" color="secondary" style="margin: 0 0 0 auto;">Graph</CButton>
        </div>
      </CCardBody>
    </CCard>

    <CCard style="width: 300px;">
      <CCardBody>
        <p style="text-align: end; font-size:25px;">{{this.crad3.description}}</p>
        <div style="display: flex; justify-content: flex-end; ">
          <p style="margin: 0 5px 0 0; font-size:20px;">{{this.crad3.value}}</p>
          <p style="font-size:15px; line-height: 35px">{{this.crad3.unit}}</p>
        </div>
        <div style="display: flex;">
          <p style="text-align: start; font-size:15px;">{{this.crad3.timestamp}}</p>
          <CButton v-on:click="showGraph()" color="secondary" style="margin: 0 0 0 auto;">Graph</CButton>
        </div>
      </CCardBody>
    </CCard>
    </div>

    <div style="display: flex; justify-content: space-evenly;">
    <CCard style="width: 300px;">
      <CCardBody>
        <p style="text-align: end; font-size:25px;">{{this.crad4.description}}</p>
        <div style="display: flex; justify-content: flex-end; ">
          <p style="margin: 0 5px 0 0; font-size:20px;">{{this.crad4.value}}</p>
          <p style="font-size:15px; line-height: 35px">{{this.crad4.unit}}</p>
        </div>
        <div style="display: flex;">
          <p style="text-align: start; font-size:15px;">{{this.crad4.timestamp}}</p>
          <CButton v-on:click="showGraph()" color="secondary" style="margin: 0 0 0 auto;">Graph</CButton>
        </div>
      </CCardBody>
    </CCard>
    
    <CCard style="width: 300px;">
      <CCardBody>
        <p style="text-align: end; font-size:25px;">{{this.crad5.description}}</p>
        <div style="display: flex; justify-content: flex-end; ">
          <p style="margin: 0 5px 0 0; font-size:20px;">{{this.crad5.value}}</p>
          <p style="font-size:15px; line-height: 35px">{{this.crad5.unit}}</p>
        </div>
        <div style="display: flex;">
          <p style="text-align: start; font-size:15px;">{{this.crad5.timestamp}}</p>
          <CButton v-on:click="showGraph()" color="secondary" style="margin: 0 0 0 auto;">Graph</CButton>
        </div>
      </CCardBody>
    </CCard>

    <CCard style="width: 300px;">
      <CCardBody>
        <p style="text-align: end; font-size:25px;">{{this.crad6.description}}</p>
        <div style="display: flex; justify-content: flex-end; ">
          <p style="margin: 0 5px 0 0; font-size:20px;">{{this.crad6.value}}</p>
          <p style="font-size:15px; line-height: 35px">{{this.crad6.unit}}</p>
        </div>
        <div style="display: flex;">
          <p style="text-align: start; font-size:15px;">{{this.crad6.timestamp}}</p>
          <CButton v-on:click="showGraph()" color="secondary" style="margin: 0 0 0 auto;">Graph</CButton>
        </div>
      </CCardBody>
    </CCard>
    </div>


  </div>
</template>

<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'
import config from '../config'

const axios = require("axios");

export default {
  name: 'DashboardEgat',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand
  },
  data () {
    return {
      crad0 : {},
      crad1 : {},
      crad2 : {},
      crad3 : {},
      crad4 : {},
      crad5 : {},
      crad6 : {},
    }
  },
  mounted() {
    this.UpdateData()
  },
  methods: {
    showGraph(){
      console.log("ShowGraph")
    },
    UpdateData(){
      this.Crad0("Oa")
      this.Crad1("Hr")
      this.Crad2("St")
      this.Crad3("Gb")
      this.Crad4("Cd")
      this.Crad5("Cl")
      this.Crad6("Au")
    },
    Crad0(tag){
      this.API_pulling(tag).then((res) => {
        console.log(res.data)
        this.crad0 = res.data
      });
    },
    Crad1(tag){
      this.API_pulling(tag).then((res) => {
        console.log(res.data)
        this.crad1 = res.data
      });
    },
    Crad2(tag){
      this.API_pulling(tag).then((res) => {
        console.log(res.data)
        this.crad2 = res.data
      });
    },
    Crad3(tag){
      this.API_pulling(tag).then((res) => {
        console.log(res.data)
        this.crad3 = res.data
      });
    },
    Crad4(tag){
      this.API_pulling(tag).then((res) => {
        console.log(res.data)
        this.crad4 = res.data
      });
    },
    Crad5(tag){
      this.API_pulling(tag).then((res) => {
        console.log(res.data)
        this.crad5 = res.data
      });
    },
    Crad6(tag){
      this.API_pulling(tag).then((res) => {
        console.log(res.data)
        this.crad6 = res.data
        setTimeout(() => { this.UpdateData() }, 5000);
      });
    },
    API_pulling(tag) {
      return new Promise((resolve, reject) => {
        const header = { "Content-Type": "application/json" };
        // axios.get( config.server+"/databasepulling/?tag="+tag,{
        axios.post( config.server+"/databasepulling/?tag="+tag,{
            headers: header,
          })
          .then(function (res) {
            resolve(res);
          })
          .catch(function (err) {
            reject(err);
          });
      });
    },
  }
}
</script>
