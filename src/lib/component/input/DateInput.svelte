<script>
  let {name, value = $bindable(''), className = 'form-control', required = true} = $props();

  export function getValue() {
    return value == null ? null : value;
  }
</script>

<input type="date"
       name={name}
       class={className}
       bind:value={value}
       required={required}
/>
