import Swal from "sweetalert2";

interface ConfirmDeleteOptions {
  title?: string;
  description?: string;
  confirmText?: string;
}

export const confirmDelete = async ({
  title = "Are you sure you want to delete?",
  description = "This action cannot be undone.",
  confirmText = "Delete",
}: ConfirmDeleteOptions = {}) => {
  const result = await Swal.fire({
    html: `
      <div class="modal-box text-center back-wh">
        <div class="modal-box-body">
          <div class="mb-40">
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
        </div>
        <div class="modal-box-footer">
          <button id="confirm-delete" class="btn btn-red w-100 sm">
            ${confirmText}
          </button>
        </div>
      </div>
    `,
    showConfirmButton: false,
    showCancelButton: false,
    backdrop: true,
    allowOutsideClick: true,
    didOpen: () => {
      const btn = document.getElementById("confirm-delete");
      btn?.addEventListener("click", () => {
        Swal.close({ isConfirmed: true });
      });
    },
  });

  return result.isConfirmed;
};
