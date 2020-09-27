<script type ="text/javascript">
  
  function Search() {
  var searchText = document.getElementByID("Searchtxt").value;
  var dropDown = document.getElementByID("coldropdwon").value;
  var url = "";
  
  if (searchText != "") {
  if (dropDown = "" ||  dropDown = "" || dropDown = "" || dropDown = "" ||) {
      url = "FilterField1" + dropDown + "&FilterValue1" + searchText;
      window.location.href = "AllItems.aspx?" + url;
      }
      else {
      url = "FilterName" + dropDown + "&FilterMultiValue=*" + searchText + "*";
      window.location.href = "AllItems.aspx";
      }
  }
  else {
      return false;
      }
}
function Clear() {
  window.location.href = "AllItems.aspx?" + url;
  }
  
  </script>
