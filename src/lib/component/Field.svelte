<script>
  import Labels from "../Labels.js";

  let { label, labelFor, required = true, fieldContent } = $props();
</script>

<div class="row row-cols-md-2 mt-5">
  <div class="col-md-2">
    <label class="form-label" for={labelFor}>{label} {required ? Labels.get("required-field-label-suffix") : ''}</label>
  </div>
  <div class="col-md-10">
    {@render fieldContent()}
  </div>
</div>
