import {$api, $maps} from '@/http'
import {TestPayload} from '@/models'

// Будем валидировать данные не в запросе, а до его создания
// В оберте над этими запросами, которые также можно выделить в отдельный файл

export class ApiService {
	static async test(testPayload: TestPayload) {
		return $api.post<TestPayload>('/test/', testPayload)
	}

	static async getUser() {
		return $api.get('/users/')
	}

	static async getEvents() {
		return $api.get('/events/')
	}

	static async getPlaces() {
		return $api.get('/places/')
	}

	static async getCompany() {
		return $api.get('/company/')
	}

	static async getRoutes() {
		return $api.get('/routes/')
	}

	static async getHotels() {
		return $api.get('/routes/1')
	}

	static async getFood() {
		return $api.get('/routes/2')
	}

	static async onboardingComplete() {
		return $api.patch('/users/'), {passed_onboarding: true}
	}

	static async getlocation(params: Object) {
		return $maps.post('/ip2geo/'), params
	}
}

// Запросы в коде можно писать оборачивая запросы выше в хендлер
// Также можно переписать все это с классов на простой экспорт методов,
// но тогда нужно будет более конкретно давать названия
