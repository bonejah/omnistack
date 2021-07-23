class HealthCheckController {
  async check(req, res) {
    return await res.json('Server OK on port 3001');
  }
}

module.exports = new HealthCheckController();