const formatEventDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
  return formattedDate;
};

const formatEventTime = (timeString) => {
  const eventTime = new Date(`1970-01-01T${timeString}`);
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return eventTime.toLocaleTimeString('en-US', options);
};

export { formatEventDate, formatEventTime };
