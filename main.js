(()=>{var t={766:t=>{t.exports='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <div class="block"> <div class="box-content"> <ul class="records"> </ul> <form class="modal" novalidate> <span class="modal-title">Что-то пошло не так <br></span> <span class="modal-content">К сожалению, нам не удалось определить ваше местоположение, пожалуста, дайте разрешение на использование геолокации, либо введите координаты вручную.</span> <div class="geo-modal"> <span class="geo-title">Широта и долгота через запятую <br></span> <input type="text" class="input-modal" name="input-modal" required pattern="^\\[?(-?[1-8]?\\d(?:\\.\\d{1,18})?|90(?:\\.0{1,18})?),(\\s?)(-?(?:1[0-7]|[1-9])?\\d(?:\\.\\d{1,18})?|180(?:\\.0{1,18})?)\\]?$"> <div class="modal-list-btn"> <button type="button" class="btn-cancel">Отмена</button> <button type="submit" class="btn-ok">Ок</button> </div> </div> </form> <input type="text" class="input" name="input" placeholder="Введите пост (не менее 3х символов)"> </div> </div> </body> </html> '}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var l=e[s]={exports:{}};return t[s](l,l.exports,i),l.exports}(()=>{"use strict";const t=document.querySelector(".input"),e=document.querySelector(".records");(new class{constructor(){this.input=t,this.records=e,this.onSubmitPost=this.onSubmitPost.bind(this),this.btnModalOkClick=this.btnModalOkClick.bind(this),this.onSubmitPostAfterModal=this.onSubmitPostAfterModal.bind(this),this.arrGeo=null}geolocation(){navigator.geolocation.getCurrentPosition((t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.input.addEventListener("keydown",this.onSubmitPost)}),(t=>{this.input.style.background="#f1090921",this.input.readOnly=!0,this.modal=document.querySelector(".modal"),this.modal.style.display="block",this.btnModalCancelClick(),this.btnModalOkClick(),this.input.addEventListener("keydown",this.onSubmitPostAfterModal)}),{enableHighAccuracy:!0})}onSubmitPost(t){this.recordsItem=document.querySelectorAll(".records-item"),13===t.keyCode&&0===this.recordsItem.length&&this.input.value.length>2?(e.insertAdjacentHTML("afterBegin",`\n          <li class="records-item">\n            <div class="line1">\n              <div class="records-item-content">${this.input.value}</div>\n            <div class="records-item-time">${(new Date).toLocaleString().slice(0,-3)}</div>\n            </div>\n            <div class="geolocation">${this.latitude}, -${this.longitude}</div>\n          </li>`),this.input.value=""):13===t.keyCode&&0!==this.recordsItem.length&&this.input.value.length>2&&(e.insertAdjacentHTML("afterBegin",`\n          <li class="records-item">\n            <div class="line1">\n              <div class="records-item-content">${this.input.value}</div>\n              <div class="records-item-time">${(new Date).toLocaleString().slice(0,-3)}</div>\n            </div>\n            <div class="geolocation">${this.latitude}, -${this.longitude}</div>\n          </li>`),this.input.value="")}btnModalCancelClick(){this.btnCancel=document.querySelector(".btn-cancel"),this.btnCancel.addEventListener("click",(()=>{this.modal.style.display="none",this.input.placeholder="Включите геолокацию и обновите страницу!"}))}btnModalOkClick(){this.inputModal=document.querySelector(".input-modal"),this.arrGeo=[],this.modal.addEventListener("submit",(t=>{var e;t.preventDefault(),e=this.inputModal.value,/^\[?(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?),(\s?)(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)\]?$/.test(e)?(this.modal.style.display="none",this.input.style.background="none",this.input.readOnly=!1,this.inputModal.value=this.inputModal.value.replace(/[^0-9,.-]/g," "),this.inputModal.value=this.inputModal.value.replace(/\s{2,}/g," ").replace(/([,]+)(?=\S)/g,"$1 "),this.arrGeo.push(this.inputModal.value)):this.modal.reportValidity()}))}onSubmitPostAfterModal(t){this.recordsItem=document.querySelectorAll(".records-item"),13===t.keyCode&&0===this.recordsItem.length&&this.input.value.length>2?(this.records.insertAdjacentHTML("afterBegin",`\n          <li class="records-item">\n            <div class="line1">\n              <div class="records-item-content">${this.input.value}</div>\n              <div class="records-item-time">${(new Date).toLocaleString().slice(0,-3)}</div>\n            </div>\n            <div class="geolocation">${this.arrGeo}</div>\n          </li>`),this.input.value=""):13===t.keyCode&&0!==this.recordsItem.length&&this.input.value.length>2&&(this.records.insertAdjacentHTML("afterBegin",`\n          <li class="records-item">\n            <div class="line1">\n              <div class="records-item-content">${this.input.value}</div>\n              <div class="records-item-time">${(new Date).toLocaleString().slice(0,-3)}</div>\n            </div>\n            <div class="geolocation">${this.arrGeo[this.arrGeo.length-1]}</div>\n          </li>`),this.input.value="")}}).geolocation(),i(766)})()})();
//# sourceMappingURL=main.js.map