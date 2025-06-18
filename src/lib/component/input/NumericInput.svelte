<script>
  let {name, value = $bindable(''), className = 'form-control', required = true, min = null, max = null, step = null} = $props();

  export function getValue() {
    if (value == null) return null;
    if (step == null || Number.isInteger(step)) return parseInt(value);
    return parseFloat(step);
  }
</script>

<input type="number"
       name={name}
       class={className}
       bind:value={value}
       required={required}
       min={min}
       max={max}
       step={step}
/>
