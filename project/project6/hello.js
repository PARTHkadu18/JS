const element=document.querySelector('.container')

window.addEventListener('keydown',(e)=>{
    element.innerHTML=`
        <div>
        <table>
      <tr>
        <td>Key</td>
        <td>Keycode</td>
        <td>Code</td>
      </tr>
      <tr>
        <td>${e.key=== ' '?'Space' :e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
        </div>
    `
})