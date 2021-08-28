import * as ListAllUsersUseCase from "./ListAllUsersUseCase"

// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        inst = new ListAllUsersUseCase.ListAllUsersUseCase({})
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: 123 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: "user123" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: "user_name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: "username" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: "user-name" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.execute({ user_id: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
