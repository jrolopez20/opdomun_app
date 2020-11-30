export const PaginatedResult = (response) => {
  return {
    total: response.headers['pagination-count'],
    perPage: response.headers['pagination-limit'],
    page: response.headers['pagination-page'],
    data: response.data
  }
}
