<template>
  <v-container>
    <!-- page title -->
    <p class="text-h4 block">Consulta de Alunos</p>
    <v-row>
      <v-col>
        <v-row>
          <v-breadcrumbs :items="['Home', 'Aluno']"></v-breadcrumbs>
        </v-row>
      </v-col>
    </v-row>

    <!-- search field and registration button -->
    <v-row>
      <v-col align-self="center" cols="7">
        <v-row  justify="end">
          <v-text-field
            density="compact"
            variant="solo"
            label="Buscar por nome (tecle enter)"
            prepend-inner-icon="mdi-magnify"
            v-model="searchTerm"
            persistent-clear
            clearable
            single-line
            hide-details
            @click:clear="getAllStudent()"
            @keydown.enter="getAllStudent()"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-col align-self="center" cols="5">
        <v-row justify="end">
          <v-btn prepend-icon="mdi-account-plus" density="default" @click="openFormStudent()">Cadastrar Aluno</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row>&nbsp;</v-row>

    <!-- list of students -->
    <v-row>
      <v-data-table height="300" :headers="headers" :items="students" class="elevation-1">
        <!-- message when the table is done -->
        <template v-slot:no-data>
          <v-col align-self="stretch">
            <p>Nenhum registro retornado.<br/>Clique em <strong>carregar</strong> para atualizar a lista.</p>
            <v-btn
              size="x-small" 
              prepend-icon="mdi-refresh"
              @click="getAllStudent">
              carregar
            </v-btn>
          </v-col>
        </template>

        <!-- action buttons -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon size="small" class="me-2" @click="openFormStudent(item)">mdi-pencil</v-icon>
          <v-icon size="small" @click="deleteStudent(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-row>

    <!-- form new/edit students -->
      <v-dialog width="500" v-model="studentFormControl.show">
                <v-card density="compact">
                  <v-card-title>
                    <span class="text-h5">Formulário Cadastro de Aluno</span>
                  </v-card-title>
                  <v-divider></v-divider>

                  <v-card-text >
                    <v-container>
                      <v-form ref="formStudent">
                        <v-text-field
                        density="compact"
                        label="Código"
                        variant="outlined"
                        v-model="studentFormControl.values.id"
                        :readonly="studentFormControl.modeEdit"
                        :disabled="studentFormControl.modeEdit"
                        @input="studentFormControl.values.id = studentFormControl.values.id.toUpperCase()"
                        :rules="studentFormControl.rules.id"
                        required
                        ></v-text-field>

                        <v-text-field
                        density="compact"
                        label="CPF"
                        variant="outlined"
                        v-model="studentFormControl.values.cpf"
                        :readonly="studentFormControl.modeEdit"
                        :disabled="studentFormControl.modeEdit"
                        @input="studentFormControl.values.cpf = studentFormControl.values.cpf.toUpperCase()"
                        :rules="studentFormControl.rules.cpf"
                        required
                        ></v-text-field>
                      
                        <v-text-field
                        density="compact"
                        label="Nome"
                        variant="outlined"
                        v-model="studentFormControl.values.name"
                        @input="studentFormControl.values.name = studentFormControl.values.name.toUpperCase()"
                        :rules="studentFormControl.rules.name"
                        required
                        ></v-text-field>

                        <v-text-field
                        density="compact"
                        label="Email"
                        variant="outlined"
                        v-model="studentFormControl.values.email"
                        @input="studentFormControl.values.email = studentFormControl.values.email.toUpperCase()"
                        :rules="studentFormControl.rules.email"
                        ></v-text-field>
                      </v-form>
                    </v-container>
                  </v-card-text>

                  <v-card-actions co>
                    <v-spacer></v-spacer>
                    <v-btn density="default" variant="text" @click="studentFormControl.show = false">Canelar</v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="saveStudent">Salvar</v-btn>
                </v-card-actions>
                </v-card>
      </v-dialog>
  </v-container>
</template>


<script>
  import ServiceStudent from '../services/Student.js'

  export default {
    name: 'AlunoViewTest',
    data: () => ({
      searchTerm: '',
      studentFormControl: {
        show: false,
        modeEdit: false,
        values: {
          id: '',
          cpf: '',
          name: '',
          email: '',
        },
        rules: {
          id: [
            v => !!v || 'Código é obrigatório',
            v => !/[^0-9]/g.test(v) || 'Somente números são permitidos',
            v => (v && v.length < 21) || 'Deve conter no máximo 20 caracteres',
          ],
          name : [
            v => !!v || 'Nome é obrigatório',
            v => (v && (v.length > 3 && v.length < 101)) || 'Deve conter entre 4 e 100 catacteres',
          ],
          cpf: [
            v => !!v || 'CPF é obrigatório',
            v => !/[^0-9]/g.test(v) || 'Somente números são permitidos',
            v => (v && v.length == 11) || 'Deve conter 11 caracteres',
          ],
          email: [
            v => (!v || /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)) || 'E-mai inválido',
          ]
        }
      },
      headers: [
        { title: 'CÓDIGO',  key: 'id', align: 'start', sortable: true },
        { title: 'ALUNO',   key: 'name', sortable: true },
        { title: 'E-MAIL',  key: 'email', sortable: true },
        { title: 'CPF',     key: 'cpf', sortable: true },
        { title: 'ACTIONS', key: 'actions', sortable: false },
      ],
      students: [],
    }),

    mounted () {
      this.getAllStudent();
    },

    methods: {
      async getAllStudent () {
        this.students = await ServiceStudent.getAll(this.searchTerm || '');
      },

      async openFormStudent (item={}) {
        if (Object.keys(item).length > 0) {      
          this.studentFormControl.values = Object.assign({}, item);
          this.studentFormControl.modeEdit = true;
        } else {
          this.studentFormControl.values = {id: '', cpf: '', name: '', email: '' }
          this.studentFormControl.modeEdit = false;
        }
        this.studentFormControl.show = true;
      },

      async saveStudent () {
        const { valid } = await this.$refs.formStudent.validate()
        if (!valid) return

        const data = Object.assign({}, this.studentFormControl.values);
        if (this.studentFormControl.modeEdit) {
          const res = await ServiceStudent.updateOne(data);
          const itemPosition = this.students.findIndex(element => element.id === res.id);
          if (itemPosition < 0) return;
          Object.assign(this.students[itemPosition], res)
        } else {
          const res = await ServiceStudent.createOne(data);
          this.students.push(res)
        }
        this.studentFormControl.show = false;
        this.studentFormControl.values = {id: '', cpf: '', name: '', email: '' }
      },

      async deleteStudent (item) {
        try {
          const isConfirmed = await this.$confirm({
            content: `Deseja apagar o aluno ${item.name}?`,
            dialogProps: { width: '50%' },
            theme: 'ligth'
           })
          if (!isConfirmed) return
          
          await ServiceStudent.deleteOne(item.id)
          const itemPosition = this.students.findIndex(element => element.id === item.id);
          if (itemPosition < 0) return;
          this.students.splice(itemPosition, 1);
        } catch (err) {
          console.log(err)
        }
      },
    },
  }
</script>

<style>
  .v-data-table__td {
    text-transform: uppercase;
  }
</style>
