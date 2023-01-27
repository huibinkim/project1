 // Q. 별을 클릭했을 때, 클릭한 별을 기점으로 왼쪽 모두 checked 되야한다.
      // 1. 빈별을 클릭하면 노란별로 바뀐다.
      // 2. 왼쪽부터 클릭한 순서의 별까지 모두 노란별로 바껴야 한다.
      // 3. 노란별을 다시 클릭하면 빈별로 바뀐다.(toggle)

      // const starCon = document.querySelector('.star-content');
      // const starBtn1 = document.getElementById('click1');
      // const starBtn2 = document.getElementById('click2');
      // const starBtn3 = document.getElementById('click3');
      // const starBtn4 = document.getElementById('click4');

      // starBtn1.addEventListener('click', function () {
      //   document.querySelector('.btn').classList.add('btn-on');
      // });
      // starBtn2.addEventListener('click', function () {
      //   document.querySelector('.btn').classList.add('btn-on');
      // });
      // starBtn3.addEventListener('click', function () {
      //   document.querySelector('.btn').classList.add('btn-on');
      // });
      // starBtn4.addEventListener('click', function () {
      //   document.querySelector('.btn').classList.add('btn-on');
      // });

      // console.log(starBtn1);

      const starBtn = document.querySelector("btn");
      const starBtn2 = document.getElementById("click2");
      const starBtn3 = document.getElementById("click3");
      const starBtn4 = document.getElementById("click4");
      const starBtn5 = document.getElementById("click5");

      starBtn.addEventListener('click', function(){

      });

      starBtn.function(e){
        let clickBtn = document.getElementById('click');
        for(i=0; i < new.length; i++){
          clickBtn = document.getElementById(`click${i}`);
        }
      }
      console.log(clickBtn);