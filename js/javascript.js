    var counter = 0;
    var total_sum;
    var current_credit

    $(document).ready(function () {
      $("#course_1").hide();
      $("#course_2").hide();
      $("#course_3").hide();
      $("#course_4").hide();
      $("#course_5").hide();
      $("#course_6").hide();
      $("#course_7").hide();
      $("#course_8").hide();
      $("#course_9").hide();
      $("#course_10").hide();
      $("#calculate_btn").hide();
      $("#result").hide();
      $("#field").hide();
    });

    $("#next_btn").click(function () {
      counter++;
      if (counter == 1) {
        $("#calculate_btn").show();
        $("#next_btn").hide();
        $("#course_selector").hide();
        if ($("#current_sem_course").val() == 1) {
          $("#course_1").show();
          $("#course_2").hide();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
          $("#field").show();
        } else if ($("#current_sem_course").val() == 2) {
          $("#course_1").show();
          $("#course_2").show();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
          $("#field").show();
        } else if ($("#current_sem_course").val() == 3) {
          $("#course_1").show();
          $("#course_2").show();
          $("#course_3").show();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
          $("#field").show();
        } else if ($("#current_sem_course").val() == 4) {
          $("#course_1").show();
          $("#course_2").show();
          $("#course_3").show();
          $("#course_4").show();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
          $("#field").show();
        } else if ($("#current_sem_course").val() == 5) {
          $("#course_1").show();
          $("#course_2").show();
          $("#course_3").show();
          $("#course_4").show();
          $("#course_5").show();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
          $("#field").show();
        } else if ($("#current_sem_course").val() == 6) {
          $("#course_1").show();
          $("#course_2").show();
          $("#course_3").show();
          $("#course_4").show();
          $("#course_5").show();
          $("#course_6").show();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
          $("#field").show();
        } else if ($("#current_sem_course").val() == 7) {
          $("#course_1").show();
          $("#course_2").show();
          $("#course_3").show();
          $("#course_4").show();
          $("#course_5").show();
          $("#course_6").show();
          $("#course_7").show();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
          $("#field").show();

        } else if ($("#current_sem_course").val() == 8) {
          $("#course_1").show();
          $("#course_2").show();
          $("#course_3").show();
          $("#course_4").show();
          $("#course_5").show();
          $("#course_6").show();
          $("#course_7").show();
          $("#course_8").show();
          $("#course_9").hide();
          $("#course_10").hide();
          $("#field").show();
        } else if ($("#current_sem_course").val() == 9) {
          $("#course_1").show();
          $("#course_2").show();
          $("#course_3").show();
          $("#course_4").show();
          $("#course_5").show();
          $("#course_6").show();
          $("#course_7").show();
          $("#course_8").show();
          $("#course_9").show();
          $("#course_10").hide();
        } else if ($("#current_sem_course").val() == 10) {
          $("#course_1").show();
          $("#course_2").show();
          $("#course_3").show();
          $("#course_4").show();
          $("#course_5").show();
          $("#course_6").show();
          $("#course_7").show();
          $("#course_8").show();
          $("#course_9").show();
          $("#course_10").show();
          $("#field").show();
        }
        else{
          alert("Please Enter a valid input");
          myref();
        }
      }
    });

    $("#calculate_btn").click(function () {
      if ($("#current_sem_course").val() == 1) {
        var c1_credit = $("#credit_completed_1").val();
        var c1_cgpa = $("#current_cgpa_1").val();
        c1_credit = parseFloat(c1_credit);
        c1_cgpa = parseFloat(c1_cgpa);
      
        var current_sum = c1_credit * c1_cgpa;
        current_credit = c1_credit;
        total_sum = current_sum / current_credit;
        $("#calculate_btn").hide();
        $("#course_1").hide();
        $("#field").hide();
          $("#course_2").hide();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
      } else if ($("#current_sem_course").val() == 2) {
        var c1_credit = $("#credit_completed_1").val();
        var c1_cgpa = $("#current_cgpa_1").val();

        var c2_credit = $("#credit_completed_2").val();
        var c2_cgpa = $("#current_cgpa_2").val();

        c1_credit = parseFloat(c1_credit);
        c1_cgpa = parseFloat(c1_cgpa);

        c2_credit = parseFloat(c2_credit);
        c2_cgpa = parseFloat(c2_cgpa);
        
        var current_sum = c1_credit * c1_cgpa + c2_credit * c2_cgpa;
        current_credit = c1_credit + c2_credit;
        total_sum = current_sum / current_credit;

        $("#calculate_btn").hide();
        $("#course_1").hide();
        $("#field").hide();
          $("#course_2").hide();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
      } else if ($("#current_sem_course").val() == 3) {
        var c1_credit = $("#credit_completed_1").val();
        var c1_cgpa = $("#current_cgpa_1").val();

        var c2_credit = $("#credit_completed_2").val();
        var c2_cgpa = $("#current_cgpa_2").val();

        var c3_credit = $("#credit_completed_3").val();
        var c3_cgpa = $("#current_cgpa_3").val();

        c1_credit = parseFloat(c1_credit);
        c1_cgpa = parseFloat(c1_cgpa);

        c2_credit = parseFloat(c2_credit);
        c2_cgpa = parseFloat(c2_cgpa);

        c3_credit = parseFloat(c3_credit);
        c3_cgpa = parseFloat(c3_cgpa);

        var current_sum =
          c1_credit * c1_cgpa + c2_credit * c2_cgpa + c3_credit * c3_cgpa;
        current_credit = c1_credit + c2_credit + c3_credit;
        total_sum = current_sum / current_credit;
        $("#calculate_btn").hide();
        $("#course_1").hide();
        $("#field").hide();
          $("#course_2").hide();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
      } else if ($("#current_sem_course").val() == 4) {
        var c1_credit = $("#credit_completed_1").val();
        var c1_cgpa = $("#current_cgpa_1").val();

        var c2_credit = $("#credit_completed_2").val();
        var c2_cgpa = $("#current_cgpa_2").val();

        var c3_credit = $("#credit_completed_3").val();
        var c3_cgpa = $("#current_cgpa_3").val();

        var c4_credit = $("#credit_completed_4").val();
        var c4_cgpa = $("#current_cgpa_4").val();

        c1_credit = parseFloat(c1_credit);
        c1_cgpa = parseFloat(c1_cgpa);

        c2_credit = parseFloat(c2_credit);
        c2_cgpa = parseFloat(c2_cgpa);

        c3_credit = parseFloat(c3_credit);
        c3_cgpa = parseFloat(c3_cgpa);

        c4_credit = parseFloat(c4_credit);
        c4_cgpa = parseFloat(c4_cgpa);

        var current_sum =
          c1_credit * c1_cgpa +
          c2_credit * c2_cgpa +
          c3_credit * c3_cgpa +
          c4_credit * c4_cgpa;
        current_credit = c1_credit + c2_credit + c3_credit + c4_credit;
        total_sum = current_sum / current_credit;
        $("#calculate_btn").hide();
        $("#course_1").hide();
        $("#field").hide();
          $("#course_2").hide();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
      } else if ($("#current_sem_course").val() == 5) {
        var c1_credit = $("#credit_completed_1").val();
        var c1_cgpa = $("#current_cgpa_1").val();

        var c2_credit = $("#credit_completed_2").val();
        var c2_cgpa = $("#current_cgpa_2").val();

        var c3_credit = $("#credit_completed_3").val();
        var c3_cgpa = $("#current_cgpa_3").val();

        var c4_credit = $("#credit_completed_4").val();
        var c4_cgpa = $("#current_cgpa_4").val();

        var c5_credit = $("#credit_completed_5").val();
        var c5_cgpa = $("#current_cgpa_5").val();

        c1_credit = parseFloat(c1_credit);
        c1_cgpa = parseFloat(c1_cgpa);

        c2_credit = parseFloat(c2_credit);
        c2_cgpa = parseFloat(c2_cgpa);

        c3_credit = parseFloat(c3_credit);
        c3_cgpa = parseFloat(c3_cgpa);

        c4_credit = parseFloat(c4_credit);
        c4_cgpa = parseFloat(c4_cgpa);

        c5_credit = parseFloat(c5_credit);
        c5_cgpa = parseFloat(c5_cgpa);

        var current_sum =
          c1_credit * c1_cgpa +
          c2_credit * c2_cgpa +
          c3_credit * c3_cgpa +
          c4_credit * c4_cgpa +
          c5_credit * c5_cgpa;
        current_credit =
          c1_credit + c2_credit + c3_credit + c4_credit + c5_credit;
        total_sum = current_sum / current_credit;
        $("#calculate_btn").hide();
        $("#course_1").hide();
        $("#field").hide();
          $("#course_2").hide();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
      } else if ($("#current_sem_course").val() == 6) {
        var c1_credit = $("#credit_completed_1").val();
        var c1_cgpa = $("#current_cgpa_1").val();

        var c2_credit = $("#credit_completed_2").val();
        var c2_cgpa = $("#current_cgpa_2").val();

        var c3_credit = $("#credit_completed_3").val();
        var c3_cgpa = $("#current_cgpa_3").val();

        var c4_credit = $("#credit_completed_4").val();
        var c4_cgpa = $("#current_cgpa_4").val();

        var c5_credit = $("#credit_completed_5").val();
        var c5_cgpa = $("#current_cgpa_5").val();

        var c6_credit = $("#credit_completed_6").val();
        var c6_cgpa = $("#current_cgpa_6").val();

        c1_credit = parseFloat(c1_credit);
        c1_cgpa = parseFloat(c1_cgpa);

        c2_credit = parseFloat(c2_credit);
        c2_cgpa = parseFloat(c2_cgpa);

        c3_credit = parseFloat(c3_credit);
        c3_cgpa = parseFloat(c3_cgpa);

        c4_credit = parseFloat(c4_credit);
        c4_cgpa = parseFloat(c4_cgpa);

        c5_credit = parseFloat(c5_credit);
        c5_cgpa = parseFloat(c5_cgpa);

        c6_credit = parseFloat(c6_credit);
        c6_cgpa = parseFloat(c6_cgpa);

        var current_sum =
          c1_credit * c1_cgpa +
          c2_credit * c2_cgpa +
          c3_credit * c3_cgpa +
          c4_credit * c4_cgpa +
          c5_credit * c5_cgpa +
          c6_credit * c6_cgpa;
        current_credit =
          c1_credit + c2_credit + c3_credit + c4_credit + c5_credit + c6_credit;
        total_sum = current_sum / current_credit;
        $("#calculate_btn").hide();
        $("#course_1").hide();
        $("#field").hide();
          $("#course_2").hide();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
      } else if ($("#current_sem_course").val() == 7) {
        var c1_credit = $("#credit_completed_1").val();
        var c1_cgpa = $("#current_cgpa_1").val();

        var c2_credit = $("#credit_completed_2").val();
        var c2_cgpa = $("#current_cgpa_2").val();

        var c3_credit = $("#credit_completed_3").val();
        var c3_cgpa = $("#current_cgpa_3").val();

        var c4_credit = $("#credit_completed_4").val();
        var c4_cgpa = $("#current_cgpa_4").val();

        var c5_credit = $("#credit_completed_5").val();
        var c5_cgpa = $("#current_cgpa_5").val();

        var c6_credit = $("#credit_completed_6").val();
        var c6_cgpa = $("#current_cgpa_6").val();

        var c7_credit = $("#credit_completed_7").val();
        var c7_cgpa = $("#current_cgpa_7").val();

        c1_credit = parseFloat(c1_credit);
        c1_cgpa = parseFloat(c1_cgpa);

        c2_credit = parseFloat(c2_credit);
        c2_cgpa = parseFloat(c2_cgpa);

        c3_credit = parseFloat(c3_credit);
        c3_cgpa = parseFloat(c3_cgpa);

        c4_credit = parseFloat(c4_credit);
        c4_cgpa = parseFloat(c4_cgpa);

        c5_credit = parseFloat(c5_credit);
        c5_cgpa = parseFloat(c5_cgpa);

        c6_credit = parseFloat(c6_credit);
        c6_cgpa = parseFloat(c6_cgpa);

        c7_credit = parseFloat(c7_credit);
        c7_cgpa = parseFloat(c7_cgpa);

        var current_sum =
          c1_credit * c1_cgpa +
          c2_credit * c2_cgpa +
          c3_credit * c3_cgpa +
          c4_credit * c4_cgpa +
          c5_credit * c5_cgpa +
          c6_credit * c6_cgpa +
          c7_credit * c7_cgpa;
        current_credit =
          c1_credit +
          c2_credit +
          c3_credit +
          c4_credit +
          c5_credit +
          c6_credit +
          c7_credit;
        total_sum = current_sum / current_credit;
        $("#calculate_btn").hide();
        $("#course_1").hide();
        $("#field").hide();
          $("#course_2").hide();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
      } else if ($("#current_sem_course").val() == 8) {
        var c1_credit = $("#credit_completed_1").val();
        var c1_cgpa = $("#current_cgpa_1").val();

        var c2_credit = $("#credit_completed_2").val();
        var c2_cgpa = $("#current_cgpa_2").val();

        var c3_credit = $("#credit_completed_3").val();
        var c3_cgpa = $("#current_cgpa_3").val();

        var c4_credit = $("#credit_completed_4").val();
        var c4_cgpa = $("#current_cgpa_4").val();

        var c5_credit = $("#credit_completed_5").val();
        var c5_cgpa = $("#current_cgpa_5").val();

        var c6_credit = $("#credit_completed_6").val();
        var c6_cgpa = $("#current_cgpa_6").val();

        var c7_credit = $("#credit_completed_7").val();
        var c7_cgpa = $("#current_cgpa_7").val();

        var c8_credit = $("#credit_completed_8").val();
        var c8_cgpa = $("#current_cgpa_8").val();

        c1_credit = parseFloat(c1_credit);
        c1_cgpa = parseFloat(c1_cgpa);

        c2_credit = parseFloat(c2_credit);
        c2_cgpa = parseFloat(c2_cgpa);

        c3_credit = parseFloat(c3_credit);
        c3_cgpa = parseFloat(c3_cgpa);

        c4_credit = parseFloat(c4_credit);
        c4_cgpa = parseFloat(c4_cgpa);

        c5_credit = parseFloat(c5_credit);
        c5_cgpa = parseFloat(c5_cgpa);

        c6_credit = parseFloat(c6_credit);
        c6_cgpa = parseFloat(c6_cgpa);

        c7_credit = parseFloat(c7_credit);
        c7_cgpa = parseFloat(c7_cgpa);

        c8_credit = parseFloat(c8_credit);
        c8_cgpa = parseFloat(c8_cgpa);

        var current_sum =
          c1_credit * c1_cgpa +
          c2_credit * c2_cgpa +
          c3_credit * c3_cgpa +
          c4_credit * c4_cgpa +
          c5_credit * c5_cgpa +
          c6_credit * c6_cgpa +
          c7_credit * c7_cgpa +
          c8_credit * c8_cgpa;
        current_credit =
          c1_credit +
          c2_credit +
          c3_credit +
          c4_credit +
          c5_credit +
          c6_credit +
          c7_credit +
          c8_credit;
        total_sum = current_sum / current_credit;
        $("#calculate_btn").hide();
        $("#course_1").hide();
        $("#field").hide();
          $("#course_2").hide();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
      } else if ($("#current_sem_course").val() == 9) {
        var c1_credit = $("#credit_completed_1").val();
        var c1_cgpa = $("#current_cgpa_1").val();

        var c2_credit = $("#credit_completed_2").val();
        var c2_cgpa = $("#current_cgpa_2").val();

        var c3_credit = $("#credit_completed_3").val();
        var c3_cgpa = $("#current_cgpa_3").val();

        var c4_credit = $("#credit_completed_4").val();
        var c4_cgpa = $("#current_cgpa_4").val();

        var c5_credit = $("#credit_completed_5").val();
        var c6_cgpa = $("#current_cgpa_5").val();

        var c6_credit = $("#credit_completed_6").val();
        var c6_cgpa = $("#current_cgpa_6").val();

        var c7_credit = $("#credit_completed_7").val();
        var c7_cgpa = $("#current_cgpa_7").val();

        var c8_credit = $("#credit_completed_8").val();
        var c8_cgpa = $("#current_cgpa_8").val();

        var c9_credit = $("#credit_completed_9").val();
        var c9_cgpa = $("#current_cgpa_9").val();

        c1_credit = parseFloat(c1_credit);
        c1_cgpa = parseFloat(c1_cgpa);

        c2_credit = parseFloat(c2_credit);
        c2_cgpa = parseFloat(c2_cgpa);

        c3_credit = parseFloat(c3_credit);
        c3_cgpa = parseFloat(c3_cgpa);

        c4_credit = parseFloat(c4_credit);
        c4_cgpa = parseFloat(c4_cgpa);

        c5_credit = parseFloat(c5_credit);
        c5_cgpa = parseFloat(c5_cgpa);

        c6_credit = parseFloat(c6_credit);
        c6_cgpa = parseFloat(c6_cgpa);

        c7_credit = parseFloat(c7_credit);
        c7_cgpa = parseFloat(c7_cgpa);

        c8_credit = parseFloat(c8_credit);
        c8_cgpa = parseFloat(c8_cgpa);

        c9_credit = parseFloat(c9_credit);
        c9_cgpa = parseFloat(c9_cgpa);

        var current_sum =
          c1_credit * c1_cgpa +
          c2_credit * c2_cgpa +
          c3_credit * c3_cgpa +
          c4_credit * c4_cgpa +
          c5_credit * c5_cgpa +
          c6_credit * c6_cgpa +
          c7_credit * c7_cgpa +
          c8_credit * c8_cgpa +
          c9_credit * c9_cgpa;
        current_credit =
          c1_credit +
          c2_credit +
          c3_credit +
          c4_credit +
          c5_credit +
          c6_credit +
          c7_credit +
          c8_credit +
          c9_credit;
        total_sum = current_sum / current_credit;
        $("#calculate_btn").hide();
        $("#course_1").hide();
        $("#field").hide();
          $("#course_2").hide();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
      } else if ($("#current_sem_course").val() == 10) {
        var c1_credit = $("#credit_completed_1").val();
        var c1_cgpa = $("#current_cgpa_1").val();

        var c2_credit = $("#credit_completed_2").val();
        var c2_cgpa = $("#current_cgpa_2").val();

        var c3_credit = $("#credit_completed_3").val();
        var c3_cgpa = $("#current_cgpa_3").val();

        var c4_credit = $("#credit_completed_4").val();
        var c4_cgpa = $("#current_cgpa_4").val();

        var c5_credit = $("#credit_completed_5").val();
        var c5_cgpa = $("#current_cgpa_5").val();

        var c6_credit = $("#credit_completed_6").val();
        var c6_cgpa = $("#current_cgpa_6").val();

        var c7_credit = $("#credit_completed_7").val();
        var c7_cgpa = $("#current_cgpa_7").val();

        var c8_credit = $("#credit_completed_8").val();
        var c8_cgpa = $("#current_cgpa_8").val();

        var c9_credit = $("#credit_completed_9").val();
        var c9_cgpa = $("#current_cgpa_9").val();

        var c10_credit = $("#credit_completed_10").val();
        var c10_cgpa = $("#current_cgpa_10").val();

        c1_credit = parseFloat(c1_credit);
        c1_cgpa = parseFloat(c1_cgpa);

        c2_credit = parseFloat(c2_credit);
        c2_cgpa = parseFloat(c2_cgpa);

        c3_credit = parseFloat(c3_credit);
        c3_cgpa = parseFloat(c3_cgpa);

        c4_credit = parseFloat(c4_credit);
        c4_cgpa = parseFloat(c4_cgpa);

        c5_credit = parseFloat(c5_credit);
        c5_cgpa = parseFloat(c5_cgpa);

        c6_credit = parseFloat(c6_credit);
        c6_cgpa = parseFloat(c6_cgpa);

        c7_credit = parseFloat(c7_credit);
        c7_cgpa = parseFloat(c7_cgpa);

        c8_credit = parseFloat(c8_credit);
        c8_cgpa = parseFloat(c8_cgpa);

        c9_credit = parseFloat(c9_credit);
        c9_cgpa = parseFloat(c9_cgpa);

        c10_credit = parseFloat(c10_credit);
        c10_cgpa = parseFloat(c10_cgpa);

        var current_sum =
          c1_credit * c1_cgpa +
          c2_credit * c2_cgpa +
          c3_credit * c3_cgpa +
          c4_credit * c4_cgpa +
          c5_credit * c5_cgpa +
          c6_credit * c6_cgpa +
          c7_credit * c7_cgpa +
          c8_credit * c8_cgpa +
          c9_credit * c9_cgpa +
          c10_credit * c10_cgpa;
        current_credit =
          c1_credit +
          c2_credit +
          c3_credit +
          c4_credit +
          c5_credit +
          c6_credit +
          c7_credit +
          c8_credit +
          c9_credit +
          c10_credit;
        total_sum = current_sum / current_credit;
        $("#calculate_btn").hide();
        $("#course_1").hide();
        $("#field").hide();
          $("#course_2").hide();
          $("#course_3").hide();
          $("#course_4").hide();
          $("#course_5").hide();
          $("#course_6").hide();
          $("#course_7").hide();
          $("#course_8").hide();
          $("#course_9").hide();
          $("#course_10").hide();
      }
      else{
        myref();
      }
      

      var st_name = $("#name").val();
      var dept = $("#dept").val();
      var cls_id = $("#cls_id").val();
      if(st_name ==="" || dept ==="" || cls_id ===""){
        alert("Please enter all input");
        $("#result").hide();
        myref()
        
      }
      else{
      document.getElementById('est_gpa2').innerHTML = (Math.round(total_sum * 100) / 100).toFixed(2);
      document.getElementById('std_name').innerHTML = st_name;
      document.getElementById('depart').innerHTML = dept;
      document.getElementById('class_id').innerHTML = cls_id;
      document.getElementById('tl_cr').innerHTML = current_credit;
      $("#result").show();

      }
    });

    
    function myfun(){
      window.print();
    }

    function myref(){
      location.reload();
    }
 