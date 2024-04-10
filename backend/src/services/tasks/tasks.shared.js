export const tasksPath = 'tasks'

export const tasksMethods = ['find', 'get', 'create', 'patch', 'remove']

export const tasksClient = (client) => {
  const connection = client.get('connection')

  client.use(tasksPath, connection.service(tasksPath), {
    methods: tasksMethods
  })
}
