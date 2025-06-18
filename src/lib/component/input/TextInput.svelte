<script>
  let {name, value = $bindable(''), className = 'form-control', maxlength, required = true} = $props();

  export function getValue() {
    return value == null ? null : value;
  }
</script>

<input type="text"
       name={name}
       class={className}
       bind:value={value}
       maxlength={maxlength}
       required={required}
/>
