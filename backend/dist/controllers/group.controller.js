var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getSpecificGroupDetails = ((req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
export const getMembersInAGroup = ((req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
export const getMessagesInAGroup = ((req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
export const groupJoinedbyAuthenticatedUser = ((req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
export const groupsCreatedByAuthenticatedUser = ((req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
export const createGroup = ((req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
export const addMembers = ((req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
export const removeMembers = ((req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
export const deleteGroup = ((req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
