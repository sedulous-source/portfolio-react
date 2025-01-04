// Counter
export default class countUp {
  constructor(el) {
    this.el = el;
    this.setVars();
    this.init();
  }

  setVars() {
    this.number = this.el.querySelectorAll("[data-countup-number]");
    this.observerOptions = { root: null, rootMargin: "0px 0px", threshold: 0 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const end = parseFloat(
          entry.target.dataset.countupNumber.replace(/,/g, "")
        );
        const decimals = this.countDecimals(end);
        if (entry.isIntersecting) {
          this.iterateValue(entry.target, end, decimals);
        }
      });
    }, this.observerOptions);
  }

  init() {
    if (this.number.length > 0) {
      this.number.forEach((el) => {
        this.observer.observe(el);
      });
    }
  }

  iterateValue(el, end, decimals) {
    const start = 0;
    const duration = 2500;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsedPercent = (timestamp - startTimestamp) / duration;
      const easedProgress = Math.min(this.easeOutQuint(elapsedPercent), 1);
      let interimNumber = Math.abs(easedProgress * (end - start) + start);
      el.innerHTML = this.formatNumber(interimNumber, decimals);
      if (easedProgress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    // AnimationFrame
    window.requestAnimationFrame(step);
  }

  easeOutQuad(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
  }

  countDecimals(val) {
    if (Math.floor(val) === val) return 0;
    return val.toString().split(".")[1].length || 0;
  }

  formatNumber(val, decimals) {
    return val.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }
}

const dataModules = [...document.querySelectorAll('[data-module="countup"]')];

if(dataModules) {
  dataModules.forEach((element) => {
    element.dataset.module.split(" ").forEach(function () {
      new countUp(element);
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
    var circleElements = document.querySelectorAll('.circle_percent');

    function animateCirclesOnScroll() {
        circleElements.forEach(function(circleElement) {
            if (isElementInViewport(circleElement)) {
                initializeCircle(circleElement);
            }
        });
    }

    function initializeCircle(circleElement) {
        var dataV = parseInt(circleElement.getAttribute('data-percent'));
        var dataDeg = dataV * 3.6;
        var round = circleElement.querySelector(".round_per");
        round.style.transform = "rotate(" + parseInt(dataDeg + 180) + "deg)";
        

        var counter = 0;
        var duration = 2000;
        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            counter = Math.min(progress / duration * dataV, dataV);            
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);

        if (dataV >= 51) {
            round.style.transform = "rotate(" + 360 + "deg)";
            setTimeout(function() {
                circleElement.classList.add("percent_more");
            }, 1000);
            setTimeout(function() {
                round.style.transform = "rotate(" + parseInt(dataDeg + 180) + "deg)";
            }, 1000);
        }
    }

    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Initial check on page load
    animateCirclesOnScroll();

    // Check on scroll
    window.addEventListener('scroll', function() {
        animateCirclesOnScroll();
    });
});
