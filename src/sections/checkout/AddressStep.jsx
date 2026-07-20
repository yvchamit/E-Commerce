import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
} from "../../store/actions/addressActions";
import { setAddress } from "../../store/actions/shoppingCartActions";
import { Plus, Edit2, Trash2, MapPin, Phone, User } from "lucide-react";
import AddressForm from "../signUp/AddressForm";

const AddressStep = () => {
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.client.addressList);
  const selectedAddress = useSelector((state) => state.shoppingCart.address);
  const [showModal, setShowModal] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const handleFormSubmit = (data) => {
    if (editingAddress) {
      dispatch(updateAddress({ ...data, id: editingAddress.id })).then(() =>
        setShowModal(false),
      );
    } else {
      dispatch(addAddress(data)).then(() => setShowModal(false));
    }
  };

  const openEditModal = (e, addr) => {
    e.stopPropagation();
    setEditingAddress(addr);
    setShowModal(true);
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Bu adresi silmek istediğinize emin misiniz?")) {
      dispatch(deleteAddress(id));
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Teslimat Adreslerim
          </h2>
          {addressList.length > 0 && (
            <button
              onClick={() => {
                setEditingAddress(null);
                setShowModal(true);
              }}
              className="flex items-center gap-2 bg-[#23A6F0] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#1a8cd3] transition-all shadow-md"
            >
              <Plus size={18} /> Yeni Adres Ekle
            </button>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {addressList.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="inline-flex p-4 rounded-full bg-slate-100 mb-4">
                <MapPin size={32} className="text-slate-400" />
              </div>
              <p className="font-bold text-slate-700 mb-1">
                Henüz kayıtlı adresiniz yok
              </p>
              <p className="text-sm text-slate-500 mb-6">
                Siparişinize devam edebilmek için bir teslimat adresi ekleyin.
              </p>
              <button
                onClick={() => {
                  setEditingAddress(null);
                  setShowModal(true);
                }}
                className="inline-flex items-center gap-2 bg-[#23A6F0] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#1a8cd3] transition-all shadow-md"
              >
                <Plus size={18} /> İlk Adresini Ekle
              </button>
            </div>
          ) : (
            addressList.map((address) => (
              <div
                key={address.id}
                onClick={() => dispatch(setAddress(address))}
                className={`group relative flex flex-col md:flex-row md:items-center justify-between p-5 border-2 rounded-xl cursor-pointer transition-all ${
                  selectedAddress?.id === address.id
                    ? "border-[#23A6F0] bg-blue-50/50"
                    : "border-slate-100 hover:border-slate-200 bg-white"
                }`}
              >
                {/* Sol Taraf: Adres Başlığı ve İkon */}
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`p-3 rounded-full ${selectedAddress?.id === address.id ? "bg-[#23A6F0] text-white" : "bg-slate-100 text-slate-500"}`}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-slate-800 uppercase text-sm tracking-wide">
                        {address.title}
                      </span>
                      {selectedAddress?.id === address.id && (
                        <span className="text-[10px] bg-[#23A6F0] text-white px-2 py-0.5 rounded-full font-bold">
                          SEÇİLİ
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-600 text-sm">
                      <span className="flex items-center gap-1 font-medium">
                        <User size={14} /> {address.name} {address.surname}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone size={14} /> {address.phone}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm mt-2 italic line-clamp-1">
                      {address.neighborhood}, {address.district}, {address.city}
                    </p>
                  </div>
                </div>

                {/* Sağ Taraf: Aksiyonlar */}
                <div className="flex gap-2 mt-4 md:mt-0 ml-12 md:ml-0">
                  <button
                    onClick={(e) => openEditModal(e, address)}
                    className="p-2 text-slate-400 hover:text-[#23A6F0] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-100"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, address.id)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {showModal && (
        <AddressForm
          onSubmit={handleFormSubmit}
          onCancel={() => setShowModal(false)}
          initialData={editingAddress}
        />
      )}
    </div>
  );
};

export default AddressStep;
