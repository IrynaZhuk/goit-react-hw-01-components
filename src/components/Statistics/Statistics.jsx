export const Statistics = ({title, stats}) => {
    const {label, percentage} = stats;
    return (<section class="statistics">
    <h2 class="title">{title}</h2>
  
    <ul class="stat-list">
      <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
      <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
      <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
      <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
    </ul>
  </section>)
}