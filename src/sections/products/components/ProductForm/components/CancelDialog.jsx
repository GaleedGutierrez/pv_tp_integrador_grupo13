/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@ui/alert-dialog';

export const CancelDialog = ({
	isDialogOpen,
	onDialogCancel: handleDialogCancel,
	onDialogOpenChange: handleDialogOpenChange,
	onConfirm: handleConfirm,
}) => (
	<AlertDialog
		open={isDialogOpen}
		onOpenChange={handleDialogOpenChange}
	>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>
					¿Estás seguro que querés cancelar la creación del producto?
				</AlertDialogTitle>
				<AlertDialogDescription className="text-base">
					Si cancelás, se perderán todos los datos ingresados hasta el
					momento.
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel onClick={handleDialogCancel}>
					Cancelar
				</AlertDialogCancel>
				<AlertDialogAction onClick={handleConfirm}>
					Continuar
				</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
);
