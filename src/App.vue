<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>
    <form class="card" @submit.prevent="createPerson">
      <h2>
        Работа с базой данных
      </h2>
      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>
      <button class="btn primary" :disabled="name.length === 0">
        создать человека
      </button>
    </form>

    <app-loader v-if="loading"> </app-loader>
    <app-people-list
      :people="people"
      @load="loadPeople"
      v-else
      @remove="removePeople"
    >
    </app-people-list>
  </div>
</template>

<script>
import AppPeopleList from "./AppPeopleList.vue";
import AppAlert from "./AppAlert.vue";
import AppLoader from "./AppLoader.vue";

import axios from "axios";

export default {
  components: { AppPeopleList, AppAlert, AppLoader },
  data() {
    return {
      name: "",
      people: [],
      alert: null,
      loading: false,
      url:
        "https://sdsdsdsdsdsdsd-ce7fe-default-rtdb.europe-west1.firebasedatabase.app/people/",
    };
  },
  mounted() {
    const mounted = true;
    this.loadPeople(mounted);
  },
  methods: {
    async createPerson() {
      // this.name
      const response = await fetch(`${this.url}.json`, {
        method: "Post",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({
          firstName: this.name,
        }),
      });
      const fireBaseData = await response.json();
      this.people.push({
        firstName: this.name,
        id: fireBaseData.name,
      });
      this.name = "";
    },
    async loadPeople(mounted) {
      try {
        this.loading = true;
        const { data } = await axios.get(`${this.url}.json`);
        if (!data) {
          throw new Error("Список людей пуст");
        }
        this.people = Object.keys(data).map((key) => {
          return {
            id: key,
            // firstName: data[key].firstName,
            ...data[key],
          };
        });
        this.loading = false;
      } catch (error) {
        this.loading = false;
        mounted
          ? (this.alert = null)
          : ((this.alert = {
              type: "danger",
              title: "Ошибка!",
              text: error.message,
            }),
            setTimeout(() => {
              this.alert = null;
            }, 2000));
      }
    },
    async removePeople(id) {
      try {
        const name = this.people.find((person) => person.id === id).firstName;
        await axios.delete(`${this.url}${id}.json`);
        this.people = this.people.filter((person) => person.id !== id);
        this.alert = {
          type: "primary",
          title: "Успешно",
          text: ` Пользователь с именем "${name} был удалён`,
        };
        setTimeout(() => {
          this.alert = null;
        }, 2000);
      } catch (error) {}
    },
  },
};
</script>
<style scoped></style>
